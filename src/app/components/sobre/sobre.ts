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
    'Atuação em cerca de 30 municípios no Piauí e Maranhão',
    'Sede principal em Teresina, PI',
    'Serviços de coleta, varredura, capina e remoção de areia',
    'Comprometida com a campanha "Cidade Limpa, Dever de Todos!"',
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

