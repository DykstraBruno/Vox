import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Sobre } from './components/sobre/sobre';
import { Servicos } from './components/servicos/servicos';
import { Diferenciais } from './components/diferenciais/diferenciais';
import { Projetos } from './components/projetos/projetos';
import { Galeria } from './components/galeria/galeria';
import { Depoimentos } from './components/depoimentos/depoimentos';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Hero, Sobre, Servicos, Diferenciais, Projetos, Galeria, Depoimentos, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}

