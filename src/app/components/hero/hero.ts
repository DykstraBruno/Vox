import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat { value: number; label: string; }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  stats: Stat[] = [
    { value: 200, label: 'Cidades Atendidas' },
    { value: 15,  label: 'Anos de Experiência' },
    { value: 500, label: 'Toneladas/Dia' },
    { value: 98,  label: '% Satisfação' },
  ];

  private animFrame = 0;
  private particles: Particle[] = [];
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.initParticles();
    this.animateCounters();
    this.observeFadeIn();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animFrame);
    this.observer?.disconnect();
  }

  scroll(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = 60;
    this.particles = Array.from({ length: COUNT }, () => new Particle(canvas.width, canvas.height));

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.particles.forEach(p => { p.update(canvas.width, canvas.height); p.draw(ctx); });
      this.animFrame = requestAnimationFrame(loop);
    };
    loop();
  }

  private animateCounters() {
    const els = document.querySelectorAll<HTMLElement>('.stat-number');
    els.forEach(el => {
      const target = Number(el.dataset['target'] ?? 0);
      const suffix = target === 98 ? '%' : '+';
      const dur = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor(p * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }

  private observeFadeIn() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => io.observe(el));
    this.observer = io;
  }
}

class Particle {
  x = 0; y = 0; vx = 0; vy = 0; r = 0; alpha = 0;

  constructor(w: number, h: number) { this.reset(w, h); }

  reset(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = -Math.random() * 0.6 - 0.2;
    this.r = Math.random() * 2 + 1;
    this.alpha = Math.random() * 0.5 + 0.1;
  }

  update(w: number, h: number) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.y < -10 || this.x < -10 || this.x > w + 10) this.reset(w, h);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 200, 83, ${this.alpha})`;
    ctx.fill();
  }
}

