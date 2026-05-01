import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diferenciais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diferenciais.html',
  styleUrl: './diferenciais.scss',
})
export class Diferenciais {
  diferenciais = [
    { icon: 'fa-shield-halved', title: 'Total Conformidade Legal', desc: 'Todas as atividades realizadas com as licenças ambientais exigidas pela legislação federal e estadual.' },
    { icon: 'fa-satellite-dish', title: 'Frota Rastreada', desc: 'Monitoramento em tempo real de cada veículo, garantindo segurança e pontualidade no atendimento.' },
    { icon: 'fa-file-shield', title: 'MTR Digital', desc: 'Emissão eletrônica de Manifestos de Transporte de Resíduos conforme exigência do SIGOR/MTRR.' },
    { icon: 'fa-clock', title: 'Suporte 24 horas', desc: 'Central de atendimento disponível todos os dias para emergências e atendimentos urgentes.' },
    { icon: 'fa-seedling', title: 'Aterro Zero', desc: 'Programa de maximização da reciclagem e compostagem para desvio máximo de resíduos de aterros.' },
    { icon: 'fa-chart-line', title: 'Relatórios Detalhados', desc: 'Dashboard online com indicadores de desempenho, volumes coletados e relatórios de sustentabilidade.' },
  ];
}

