"use client";

import { useMemo, useSyncExternalStore } from "react";

const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Mins" },
  { key: "seconds", label: "Secs" },
];

// The visitor's clock is an external system, so it's read through a store
// rather than an effect that writes state on every tick.
let clock = null;

function subscribe(onStoreChange) {
  clock = Date.now();
  const id = setInterval(() => {
    clock = Date.now();
    onStoreChange();
  }, 1000);
  return () => clearInterval(id);
}

const getSnapshot = () => clock;

// The server has no view of the visitor's clock, so it renders the frame
// with placeholder digits. That keeps the block a fixed height — no shift
// under the headline once the timer wakes up — and avoids a hydration
// mismatch on a value that is different in every millisecond.
const getServerSnapshot = () => null;

function remaining(target, now) {
  const ms = target - now;
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown({ endsAt }) {
  const target = useMemo(() => new Date(endsAt).getTime(), [endsAt]);
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const left = now === null ? null : remaining(target, now);

  // Deadline already passed: the availability line below carries the
  // urgency on its own rather than showing a dead clock.
  if (now !== null && !left) return null;

  return (
    <div className="mt-8 flex flex-col items-center">
      <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-ivory/45 uppercase">
        This release closes in
      </p>
      <div
        className="mt-3 grid w-full max-w-[18rem] grid-cols-4 gap-2 sm:max-w-sm sm:gap-3"
        role="timer"
        aria-live="off"
        aria-label="Time remaining on this offer"
      >
        {UNITS.map((unit) => (
          <div
            key={unit.key}
            className="rounded-2xl border border-gold-300/25 bg-ink/45 py-3 text-center backdrop-blur-sm sm:py-3.5"
          >
            <span className="font-display block text-2xl leading-none font-medium text-gold-300 tabular-nums sm:text-3xl">
              {left ? pad(left[unit.key]) : "--"}
            </span>
            <span className="mt-1.5 block text-[0.6rem] font-semibold tracking-[0.15em] text-ivory/45 uppercase">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
