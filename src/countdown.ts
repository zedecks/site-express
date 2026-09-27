import { TimeRemaining } from './types';

export class CountdownManager {
  private targetDate: number;
  private timerInterval: number | null = null;
  private popupInterval: number | null = null;
  private prevSeconds: number = -1;

  // 7 days and 12 hours in milliseconds = 648,000,000 ms (7.5 days)
  private static readonly CAMPAIGN_DURATION_MS = (7 * 24 * 60 * 60 + 12 * 60 * 60) * 1000;
  private static readonly STORAGE_KEY = 'site_express_campaign_end_time_v2';
  private static readonly POPUP_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes

  constructor() {
    this.targetDate = this.initTargetDate();
  }

  private initTargetDate(): number {
    const saved = localStorage.getItem(CountdownManager.STORAGE_KEY);
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    const target = Date.now() + CountdownManager.CAMPAIGN_DURATION_MS;
    localStorage.setItem(CountdownManager.STORAGE_KEY, target.toString());
    return target;
  }

  public getTimeRemaining(): TimeRemaining {
    const totalMs = this.targetDate - Date.now();
    if (totalMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: 0, isExpired: true };
    }

    const seconds = Math.floor((totalMs / 1000) % 60);
    const minutes = Math.floor((totalMs / 1000 / 60) % 60);
    const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalMs / (1000 * 60 * 60 * 24));

    return { days, hours, minutes, seconds, totalMs, isExpired: false };
  }

  public start(): void {
    this.updateUI();
    this.timerInterval = window.setInterval(() => this.updateUI(), 1000);
  }

  private updateUI(): void {
    const time = this.getTimeRemaining();

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (daysEl) daysEl.textContent = String(time.days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(time.hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(time.minutes).padStart(2, '0');
    
    if (secondsEl) {
      const secStr = String(time.seconds).padStart(2, '0');
      if (this.prevSeconds !== time.seconds) {
        secondsEl.textContent = secStr;
        secondsEl.classList.remove('countdown-digit');
        // Trigger reflow to restart CSS animation
        void secondsEl.offsetWidth;
        secondsEl.classList.add('countdown-digit');
        this.prevSeconds = time.seconds;
      }
    }

    if (time.isExpired) {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.handleExpiration();
    }
  }

  private handleExpiration(): void {
    const banner = document.getElementById('countdown-banner');
    if (banner) {
      banner.classList.add('bg-rose-900', 'border-rose-600');
    }
    const label = document.getElementById('countdown-label');
    if (label) {
      label.innerHTML = '⚠️ Oferta de Lançamento <strong>Expirada</strong>';
    }

    this.showExpiredModal();
    this.startRecurringPopup();
  }

  public showExpiredModal(): void {
    const modal = document.getElementById('expired-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  }

  public closeExpiredModal(): void {
    const modal = document.getElementById('expired-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  private startRecurringPopup(): void {
    if (this.popupInterval) return;
    this.popupInterval = window.setInterval(() => {
      this.showExpiredModal();
    }, CountdownManager.POPUP_INTERVAL_MS);
  }
}
