import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depoimentos.html',
  styleUrl: './depoimentos.scss',
})
export class Depoimentos {
  depoimentos = [
    {
      iniciais: 'CA',
      nome: 'Carlos Alberto',
      cargo: 'Secretário de Meio Ambiente – Sorocaba',
      texto: 'A Vox Ambiental transformou nossa gestão de resíduos. Pontualidade, relatórios impecáveis e equipe sempre solicitada. Recomendo sem reservas.',
    },
    {
      iniciais: 'MF',
      nome: 'Mariana Figueiredo',
      cargo: 'Gerente de Sustentabilidade – Grupo Industrial Paulista',
      texto: 'Parceria essencial para nossa conformidade ambiental. O MTR digital integrado ao nosso ERP nos poupou horas de trabalho mensal.',
    },
    {
      iniciais: 'RL',
      nome: 'Roberto Lima',
      cargo: 'Diretor Administrativo – Rede Hospitalar Regional',
      texto: 'Atendimento 24h faz toda a diferença no segmento de saúde. A Vox garante a coleta de RSS sem atrasos, mesmo em feriados.',
    },
  ];
}

