"use client";

import { useSyncExternalStore } from "react";

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

function calculateTimeLeft(deadline: string): CountdownState {
  const diff = new Date(deadline).getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    isExpired: false,
  };
}

function createCountdownStore(deadline: string) {
  let state = calculateTimeLeft(deadline);
  let interval: ReturnType<typeof setInterval> | null = null;
  const listeners = new Set<() => void>();

  const startInterval = () => {
    if (interval || typeof window === "undefined") return;
    interval = setInterval(() => {
      state = calculateTimeLeft(deadline);
      listeners.forEach((listener) => listener());
      if (state.isExpired && interval) {
        clearInterval(interval);
        interval = null;
      }
    }, 1000);
  };

  return {
    subscribe: (listener: () => void) => {
      listeners.add(listener);
      startInterval();
      return () => {
        listeners.delete(listener);
        if (listeners.size === 0 && interval) {
          clearInterval(interval);
          interval = null;
        }
      };
    },
    getSnapshot: () => state,
    getServerSnapshot: () => ({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
    }),
  };
}

// Store cache to prevent creating new stores on each render
const storeCache = new Map<string, ReturnType<typeof createCountdownStore>>();

export function useCountdown(deadline: string): CountdownState {
  // Get or create store for this deadline
  if (!storeCache.has(deadline)) {
    storeCache.set(deadline, createCountdownStore(deadline));
  }
  const store = storeCache.get(deadline)!;

  return useSyncExternalStore(
    store.subscribe,
    store.getSnapshot,
    store.getServerSnapshot
  );
}
