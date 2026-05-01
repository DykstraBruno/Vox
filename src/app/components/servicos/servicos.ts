import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos.html',
  styleUrl: './servicos.scss',
})
export class Servicos {
  servicos = [
    {
      icon: 'fa-truck',
      title: 'Coleta de RSU',
      desc: 'Coleta domiciliar e comercial de resíduos sólidos urbanos com cobertura total do município.',
      items: ['Porta a porta', 'Horários programados', 'Relatórios mensais'],
    },
    {
      icon: 'fa-industry',
      title: 'Resíduos Industriais',
      desc: 'Gerenciamento completo de resíduos industriais, incluindo triagem, acondicionamento e transporte.',
      items: ['Classe I e II', 'MTR digital', 'Auditoria ambiental'],
    },
    {
      icon: 'fa-hospital',
      title: 'RSS – Saúde',
      desc: 'Coleta diferenciada de resíduos de serviços de saúde (RSS) com total conformidade à RDC 222.',
      items: ['Hospitais e clínicas', 'Acondicionamento seguro', 'Tratamento e destinação'],
    },
    {
      icon: 'fa-recycle',
      title: 'Coleta Seletiva',
      desc: 'Programa de coleta seletiva com educação ambiental para municípios e condomínios.',
      items: ['Triagem por material', 'Parcerias com cooperativas', 'Índice de desvio de aterro'],
    },
    {
      icon: 'fa-leaf',
      title: 'Resíduos de Poda',
      desc: 'Coleta e compostagem de resíduos verdes, podas de árvores e varrição de vias públicas.',
      items: ['Caminhões gaiola', 'Compostagem local', 'Geração de adubo'],
    },
    {
      icon: 'fa-building-columns',
      title: 'Gestão Municipal',
      desc: 'Consultoria e operação completa de sistemas de limpeza pública para prefeituras.',
      items: ['PGRS Municipal', 'Software de gestão', 'Treinamento de equipes'],
    },
  ];
}

