import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  features = [
    'Licença ambiental completa e regularizada',
    'Frota moderna com rastreamento em tempo real',
    'Destinação final 100% legal e documentada',
    'Atendimento 24h para emergências',
    'Equipe técnica certificada e treinada',
  ];

  scroll(event: Event, id: string) {
    event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}

