import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
})
export class Projetos {
  projetos = [
    { icon: 'fa-city', tag: 'Gestão Municipal', title: 'Coleta domiciliar – Município de Sorocaba', desc: 'Implantação de sistema porta a porta com cobertura de 98% dos domicílios, reduzindo em 30% o custo operacional.', local: 'Sorocaba, SP', ano: '2022' },
    { icon: 'fa-flask', tag: 'Industrial', title: 'Gestão de resíduos – Polo industrial de Cubatão', desc: 'Coleta, triagem e destinação de resíduos industriais Classe I e II para 14 empresas do polo, com MTR digital integrado.', local: 'Cubatão, SP', ano: '2023' },
    { icon: 'fa-hospital', tag: 'Saúde', title: 'RSS – Rede Hospitalar Regional', desc: 'Gerenciamento completo de resíduos de 32 unidades de saúde, garantindo total conformidade com a RDC 222/2018.', local: 'Grande São Paulo', ano: '2021' },
    { icon: 'fa-recycle', tag: 'Coleta Seletiva', title: 'Programa Recicla + – Santos', desc: 'Lançamento de programa de coleta seletiva com educação ambiental em escolas públicas, desviando 42 ton/mês de aterro.', local: 'Santos, SP', ano: '2023' },
    { icon: 'fa-seedling', tag: 'Sustentabilidade', title: 'Compostagem centralizada – Campinas', desc: 'Instalação e operação de unidade de compostagem centralizada, processando 15 ton/dia de resíduos orgânicos municipais.', local: 'Campinas, SP', ano: '2022' },
    { icon: 'fa-road', tag: 'Limpeza Pública', title: 'Varrição mecanizada – São José dos Campos', desc: 'Operação de serviços de varrição mecanizada e manual, capina e lavagem de logradouros com equipe de 80 profissionais.', local: 'SJC, SP', ano: '2020' },
  ];
}

