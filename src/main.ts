import { demoTemplates } from './templates';
import { CountdownManager } from './countdown';

class App {
  private countdownManager: CountdownManager;

  constructor() {
    this.countdownManager = new CountdownManager();
    this.init();
  }

  private init(): void {
    this.countdownManager.start();
    this.setupMobileMenu();
    this.setupFaqAccordion();
    this.setupDemoModal();
    this.setupExpiredModal();
    this.setupScrollReveal();
  }

  private setupScrollReveal(): void {
    const revealElements = document.querySelectorAll('.reveal-init');
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('reveal-active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    // Check elements already in viewport
    setTimeout(() => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('reveal-active');
        }
      });
    }, 100);
  }

  private setupMobileMenu(): void {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileLinks = document.querySelectorAll<HTMLElement>('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu && hamburgerIcon && closeIcon) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        hamburgerIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          hamburgerIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    }
  }

  private setupFaqAccordion(): void {
    const faqToggles = document.querySelectorAll<HTMLButtonElement>('.faq-toggle');
    faqToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling as HTMLElement | null;
        const icon = toggle.querySelector<HTMLElement>('.faq-icon');
        if (!content || !icon) return;

        const isHidden = content.classList.contains('hidden');

        document.querySelectorAll<HTMLElement>('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll<HTMLElement>('.faq-icon').forEach(i => (i.textContent = '+'));
        document.querySelectorAll<HTMLElement>('.faq-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));

        if (isHidden) {
          content.classList.remove('hidden');
          icon.textContent = '−';
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  private setupDemoModal(): void {
    const demoModal = document.getElementById('demo-modal');
    const demoModalTitle = document.getElementById('demo-modal-title');
    const demoModalCta = document.getElementById('demo-modal-cta') as HTMLAnchorElement | null;
    const demoContentContainer = document.getElementById('demo-content-container');

    (window as any).openDemoModal = (type: 'food' | 'business' | 'store') => {
      const template = demoTemplates[type];
      if (!template || !demoModal || !demoModalTitle || !demoModalCta || !demoContentContainer) return;

      demoModalTitle.textContent = template.title;
      demoModalCta.href = template.ctaUrl;
      demoContentContainer.innerHTML = template.html;

      demoModal.classList.remove('hidden');
      demoModal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    };

    (window as any).closeDemoModal = () => {
      if (!demoModal) return;
      demoModal.classList.add('hidden');
      demoModal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    };

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape' && demoModal && !demoModal.classList.contains('hidden')) {
        (window as any).closeDemoModal();
      }
    });
  }

  private setupExpiredModal(): void {
    const closeBtn = document.getElementById('close-expired-modal-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.countdownManager.closeExpiredModal();
      });
    }

    (window as any).closeExpiredModal = () => {
      this.countdownManager.closeExpiredModal();
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
