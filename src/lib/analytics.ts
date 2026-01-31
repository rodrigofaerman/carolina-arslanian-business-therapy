// ============================================
// Google Analytics 4 - Event Tracking Helpers
// ============================================

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Track page views */
export function pageview(url: string) {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}

/** Track custom events */
export function event(
  action: string,
  params?: {
    category?: string;
    label?: string;
    value?: number;
  }
) {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: params?.category,
    event_label: params?.label,
    value: params?.value,
  });
}

// Pre-defined conversion events
export const trackCTA = (location: string) =>
  event("cta_click", { category: "conversion", label: location });

export const trackWhatsApp = () =>
  event("whatsapp_click", { category: "conversion", label: "floating_button" });

export const trackNavigation = (section: string) =>
  event("section_navigate", { category: "navigation", label: section });

export const trackFAQExpand = (question: string) =>
  event("faq_expand", { category: "engagement", label: question });

export const trackChecklistComplete = (count: number) =>
  event("checklist_complete", { category: "engagement", value: count });
