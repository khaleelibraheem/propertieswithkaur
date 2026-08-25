"use client";

import TextField from "../ui/TextField";

export default function StepContactForm({ step, answers, onChange, showErrors }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {step.fields.map((field, i) => (
        <TextField
          key={field.key}
          autoFocus={i === 0}
          type={field.type}
          label={field.label}
          value={answers[field.key] || ""}
          onChange={(val) => onChange(field.key, val)}
          error={showErrors && field.required && !answers[field.key] ? "Required" : undefined}
          className={field.key === "country" ? "sm:col-span-2" : undefined}
        />
      ))}
    </div>
  );
}
