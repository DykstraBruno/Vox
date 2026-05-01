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
    { icon: 'fa-truck', label: 'Frota de coleta domiciliar', size: 'wide' },
    { icon: 'fa-recycle', label: 'Central de triagem', size: 'tall' },
    { icon: 'fa-hard-hat', label: 'Equipe em campo', size: '' },
    { icon: 'fa-industry', label: 'Coleta industrial', size: '' },
    { icon: 'fa-leaf', label: 'Pátio de compostagem', size: '' },
    { icon: 'fa-hospital', label: 'RSS – coleta hospitalar', size: '' },
  ];
}

