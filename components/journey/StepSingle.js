"use client";

import SelectCard from "../ui/SelectCard";
import TextField from "../ui/TextField";

export default function StepSingle({ step, answers, onSelect, onRevealChange }) {
  const selectedValue = answers[step.key];
  const selectedOption = step.options.find((o) => o.value === selectedValue);

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => (
          <SelectCard
            key={option.value}
            label={option.label}
            description={option.description}
            selected={selectedValue === option.value}
            onClick={() => onSelect(option)}
          />
        ))}
      </div>

      {selectedOption?.reveal && (
        <div className="mt-5">
          <TextField
            autoFocus
            placeholder={selectedOption.reveal.placeholder}
            value={answers[selectedOption.reveal.key] || ""}
            onChange={(val) => onRevealChange(selectedOption.reveal.key, val)}
          />
        </div>
      )}
    </div>
  );
}
