import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss',
})
export class Galeria {
  items = [
    { icon: 'fa-truck', label: 'Coleta de Resíduos', size: 'wide', gradient: 'linear-gradient(135deg,#1a472a,#2d8a4e)' },
    { icon: 'fa-broom', label: 'Varredura de Vias', size: 'tall', gradient: 'linear-gradient(135deg,#1b4332,#40916c)' },
    { icon: 'fa-scissors', label: 'Capina e Roçagem', size: '', gradient: 'linear-gradient(135deg,#081c15,#1b4332)' },
    { icon: 'fa-hill-avalanche', label: 'Remoção de Areia', size: '', gradient: 'linear-gradient(135deg,#2d6a4f,#52b788)' },
    { icon: 'fa-city', label: 'Limpeza Pública', size: '', gradient: 'linear-gradient(135deg,#1a472a,#74c69d)' },
    { icon: 'fa-recycle', label: 'Resíduos Não Perigosos', size: '', gradient: 'linear-gradient(135deg,#081c15,#2d6a4f)' },
  ];
}

