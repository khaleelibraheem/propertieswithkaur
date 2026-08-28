"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import ProgressBar from "@/components/ui/ProgressBar";
import Button from "@/components/ui/Button";
import IntentScreen from "@/components/journey/IntentScreen";
import StepSingle from "@/components/journey/StepSingle";
import StepMulti from "@/components/journey/StepMulti";
import StepTextInput from "@/components/journey/StepTextInput";
import StepContactForm from "@/components/journey/StepContactForm";
import StepFinal from "@/components/journey/StepFinal";
import { JOURNEYS, JOURNEY_TONES, getJourneySteps } from "@/lib/journeyConfig";
import { buildSummaryLine, buildInternalProfile, buildWhatsappMessage } from "@/lib/clientProfile";
import { WHATSAPP_BASE_URL } from "@/lib/contact";

const STORAGE_KEY = "pwk-journey-v1";
const AUTO_ADVANCE_DELAY = 380;
const NOT_DECIDED_VALUE = "not-decided";

function isStepValid(step, answers) {
  if (!step) return false;
  if (step.type === "single") {
    const selected = answers[step.key];
    const option = step.options.find((o) => o.value === selected);
    if (!option) return false;
    if (option.reveal) return Boolean(answers[option.reveal.key]?.trim());
    return true;
  }
  if (step.type === "multi") {
    return (answers[step.key] || []).length > 0;
  }
  if (step.type === "text") {
    return Boolean(answers[step.key]?.trim());
  }
  if (step.type === "form") {
    return step.fields
      .filter((f) => f.required)
      .every((f) => Boolean(answers[f.key]?.trim()));
  }
  return true;
}

export default function JourneyClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlType = searchParams.get("type");

  const [type, setType] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(1);
  const [completed, setCompleted] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [prevUrlType, setPrevUrlType] = useState(urlType);

  // One-time bootstrap from sessionStorage on mount. This synchronizes with
  // an external store that isn't available during server rendering, so it
  // genuinely needs to run as an effect rather than during render.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    let restored = false;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved.type && JOURNEYS[saved.type] && (!urlType || urlType === saved.type)) {
          setType(saved.type);
          setStepIndex(saved.stepIndex || 0);
          setAnswers(saved.answers || {});
          setCompleted(Boolean(saved.completed));
          restored = true;
        }
      }
    } catch {
      // sessionStorage unavailable, continue with a fresh journey
    }
    if (!restored && urlType && JOURNEYS[urlType]) {
      setType(urlType);
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Reset the journey whenever a nav link changes the ?type= URL param.
  if (hydrated && urlType !== prevUrlType) {
    setPrevUrlType(urlType);
    if (urlType && JOURNEYS[urlType] && urlType !== type) {
      setType(urlType);
      setStepIndex(0);
      setAnswers({});
      setCompleted(false);
      setShowErrors(false);
    }
  }

  useEffect(() => {
    if (!hydrated) return;
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ type, stepIndex, answers, completed })
      );
    } catch {
      // ignore persistence failures
    }
  }, [type, stepIndex, answers, completed, hydrated]);

  const steps = useMemo(() => (type ? getJourneySteps(type) : []), [type]);
  const totalSteps = steps.length;
  const currentStep = type ? steps[stepIndex] : null;
  const valid = isStepValid(currentStep, answers);
  const tone = type ? JOURNEY_TONES[type] : null;

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setStepIndex(index);
    setShowErrors(false);
  }, []);

  const handleIntentSelect = (value) => {
    setType(value);
    setStepIndex(0);
    setAnswers({});
    setCompleted(false);
    setDirection(1);
    router.replace(`/journey?type=${value}`, { scroll: false });
  };

  const handleBack = () => {
    if (stepIndex === 0) {
      setType(null);
      setAnswers({});
      setCompleted(false);
      router.replace("/journey", { scroll: false });
      return;
    }
    goTo(stepIndex - 1, -1);
  };

  const handleContinue = () => {
    if (!isStepValid(currentStep, answers)) {
      setShowErrors(true);
      return;
    }
    if (stepIndex < totalSteps - 1) {
      goTo(stepIndex + 1, 1);
    } else {
      setCompleted(true);
      // Opened synchronously inside this click handler so it counts as a
      // user gesture and isn't blocked as a popup.
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    }
  };

  const setAnswer = (key, value) =>
    setAnswers((prev) => ({ ...prev, [key]: value }));

  const handleSingleSelect = (step, option) => {
    setAnswer(step.key, option.value);
    if (!option.reveal) {
      window.setTimeout(() => {
        setDirection(1);
        setStepIndex((idx) => {
          if (idx >= totalSteps - 1) {
            setCompleted(true);
            return idx;
          }
          return idx + 1;
        });
      }, AUTO_ADVANCE_DELAY);
    }
  };

  const handleMultiToggle = (step, value) => {
    setAnswers((prev) => {
      const current = prev[step.key] || [];
      const max = step.maxSelect || Infinity;

      if (value === NOT_DECIDED_VALUE) {
        const next = current.includes(NOT_DECIDED_VALUE) ? [] : [NOT_DECIDED_VALUE];
        return { ...prev, [step.key]: next };
      }

      const withoutNotDecided = current.filter((v) => v !== NOT_DECIDED_VALUE);
      const next = withoutNotDecided.includes(value)
        ? withoutNotDecided.filter((v) => v !== value)
        : withoutNotDecided.length < max
        ? [...withoutNotDecided, value]
        : withoutNotDecided;
      return { ...prev, [step.key]: next };
    });
  };

  const handleRestart = () => {
    setType(null);
    setAnswers({});
    setCompleted(false);
    setStepIndex(0);
    router.replace("/journey", { scroll: false });
  };

  const summaryLine = useMemo(
    () => (type && completed ? buildSummaryLine(type, answers) : ""),
    [type, completed, answers]
  );

  const whatsappHref = useMemo(() => {
    if (!type) return WHATSAPP_BASE_URL;
    const message = buildWhatsappMessage(type, answers);
    return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
  }, [type, answers]);

  useEffect(() => {
    if (completed && type) {
      const profile = buildInternalProfile(type, answers, answers);
      // Simulates the structured hand-off to the CRM described in the blueprint.
      console.info("[PWK internal client profile]", profile);
    }
  }, [completed, type, answers]);

  if (!hydrated) {
    return <div className="min-h-[60vh]" />;
  }

  const showBack = type && !completed;
  const showProgress = type && !completed;
  const journeyIntro = type && stepIndex === 0 && !completed ? JOURNEYS[type].intro : null;

  return (
    <section className="min-h-[calc(100vh-5rem)] py-14 sm:py-20">
      <Container size="narrow">
        {showBack && (
          <button
            type="button"
            onClick={handleBack}
            className="mb-6 flex items-center gap-1.5 text-sm text-ivory/50 transition-colors hover:text-ivory"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}

        <div className="rounded-[32px] border border-ink/8 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(21,19,15,0.3)] sm:p-10 lg:p-14">
          {showProgress && (
            <div className="mb-10">
              <ProgressBar step={stepIndex + 1} total={totalSteps} tone={tone} />
            </div>
          )}

          <AnimatePresence mode="wait" initial={false}>
          {!type && (
            <IntentScreen key="intent" onSelect={handleIntentSelect} />
          )}

          {type && completed && (
            <StepFinal
              key="final"
              firstName={answers.firstName}
              summaryLine={summaryLine}
              whatsappHref={whatsappHref}
              onRestart={handleRestart}
            />
          )}

          {type && !completed && currentStep && (
            <motion.div
              key={currentStep.key}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {journeyIntro && (
                <div className="mb-8">
                  <p className={clsx("text-xs font-semibold tracking-[0.2em] uppercase", tone?.text || "text-gold-700")}>
                    {journeyIntro.eyebrow}
                  </p>
                  <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                    {journeyIntro.title}
                  </h1>
                  <p className="mt-2 text-sm text-ink-faint">
                    {journeyIntro.description}
                  </p>
                </div>
              )}

              <h2 className="mb-2 font-display text-2xl leading-snug font-medium tracking-tight text-ink sm:text-3xl">
                {currentStep.question}
              </h2>
              {currentStep.description && (
                <p className="mb-6 text-sm text-ink-faint">
                  {currentStep.description}
                </p>
              )}
              {currentStep.helper && currentStep.type === "single" && (
                <p className="mb-6 text-sm text-ink-faint">{currentStep.helper}</p>
              )}

              <div className="mt-6">
                {currentStep.type === "single" && (
                  <StepSingle
                    step={currentStep}
                    answers={answers}
                    onSelect={(option) => handleSingleSelect(currentStep, option)}
                    onRevealChange={setAnswer}
                    tone={tone}
                  />
                )}
                {currentStep.type === "multi" && (
                  <StepMulti
                    step={currentStep}
                    answers={answers}
                    onToggle={(value) => handleMultiToggle(currentStep, value)}
                    tone={tone}
                  />
                )}
                {currentStep.type === "text" && (
                  <StepTextInput step={currentStep} answers={answers} onChange={setAnswer} />
                )}
                {currentStep.type === "form" && (
                  <>
                    <p className="mb-6 -mt-4 text-sm text-ink-faint">
                      {currentStep.description}
                    </p>
                    <StepContactForm
                      step={currentStep}
                      answers={answers}
                      onChange={setAnswer}
                      showErrors={showErrors}
                    />
                  </>
                )}
              </div>

              {(currentStep.type !== "single" ||
                answers[currentStep.key] &&
                  currentStep.options.find((o) => o.value === answers[currentStep.key])
                    ?.reveal) && (
                <div className="mt-10 flex justify-end">
                  <Button
                    onClick={handleContinue}
                    variant="dark"
                    size="md"
                    icon
                    className={!valid ? "opacity-50" : undefined}
                  >
                    Continue
                  </Button>
                </div>
              )}
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
