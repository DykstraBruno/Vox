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
      title: 'Coleta de Lixo',
      desc: 'Coleta domiciliar e comercial de resíduos sólidos urbanos com cobertura total do município de Barreirinhas.',
      items: ['Porta a porta', 'Horários programados', 'Relatórios mensais'],
    },
    {
      icon: 'fa-broom',
      title: 'Varredura de Vias',
      desc: 'Varredura manual e mecanizada de ruas, calçadas e logradouros públicos para manter a cidade limpa.',
      items: ['Ruas e avenidas', 'Praças e parques', 'Áreas comerciais'],
    },
    {
      icon: 'fa-scissors',
      title: 'Capina e Roçagem',
      desc: 'Controle de vegetação em vias públicas, terrenos baldios e áreas verdes do município.',
      items: ['Roçagem mecanizada', 'Capina manual', 'Limpeza de canteiros'],
    },
    {
      icon: 'fa-hill-avalanche',
      title: 'Remoção de Areia',
      desc: 'Remoção e destinação correta de areia e entulho acumulados em vias e logradouros públicos.',
      items: ['Vias e calçadas', 'Pontos viciados', 'Destinação correta'],
    },
    {
      icon: 'fa-city',
      title: 'Limpeza Pública',
      desc: 'Gestão completa de limpeza urbana para prefeituras, garantindo uma cidade limpa para todos.',
      items: ['Planejamento de rotas', 'Equipe treinada', 'Monitoramento contínuo'],
    },
    {
      icon: 'fa-recycle',
      title: 'Resíduos Não Perigosos',
      desc: 'Coleta e destinação final de resíduos não perigosos conforme legislação ambiental vigente.',
      items: ['Classificação correta', 'Transporte adequado', 'Destinação legal'],
    },
  ];
}

