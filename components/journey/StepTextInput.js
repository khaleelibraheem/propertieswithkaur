"use client";

import TextField from "../ui/TextField";

export default function StepTextInput({ step, answers, onChange }) {
  return (
    <TextField
      autoFocus
      placeholder={step.placeholder}
      value={answers[step.key] || ""}
      onChange={(val) => onChange(step.key, val)}
    />
  );
}
