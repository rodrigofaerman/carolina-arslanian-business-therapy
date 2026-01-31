"use client";

import { useState, useCallback } from "react";

export interface ChecklistState {
  checked: Set<number>;
  count: number;
  toggle: (index: number) => void;
  reset: () => void;
  isChecked: (index: number) => boolean;
}

export function useChecklist(): ChecklistState {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = useCallback((index: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setChecked(new Set());
  }, []);

  const isChecked = useCallback(
    (index: number) => checked.has(index),
    [checked]
  );

  return {
    checked,
    count: checked.size,
    toggle,
    reset,
    isChecked,
  };
}
