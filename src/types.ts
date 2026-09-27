export interface DemoTemplate {
  title: string;
  ctaUrl: string;
  html: string;
}

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
  isExpired: boolean;
}
