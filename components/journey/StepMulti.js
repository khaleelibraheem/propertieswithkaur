"use client";

import SelectCard from "../ui/SelectCard";

export default function StepMulti({ step, answers, onToggle, tone }) {
  const selected = answers[step.key] || [];
  const max = step.maxSelect || selected.length + 1;

  return (
    <div>
      <p className="mb-4 text-sm text-ink-faint">
        {selected.length} of {max} selected
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {step.options.map((option) => {
          const isSelected = selected.includes(option.value);
          const disabled = !isSelected && selected.length >= max;
          return (
            <SelectCard
              key={option.value}
              multi
              label={option.label}
              selected={isSelected}
              disabled={disabled}
              onClick={() => onToggle(option.value)}
              tone={tone}
            />
          );
        })}
      </div>
    </div>
  );
}
