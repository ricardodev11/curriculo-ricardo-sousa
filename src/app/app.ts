import { Component, signal } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { ContatoComponent } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContatoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  tema = signal<'light' | 'dark'>(this.temaInicial());

  constructor() {
    this.aplicar(this.tema());
  }

  temaInicial(): 'light' | 'dark' {
    const salvo = localStorage.getItem('tema');
    if (salvo === 'light' || salvo === 'dark') {
      return salvo;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  toggleTema(): void {
    this.tema.set(this.tema() === 'dark' ? 'light' : 'dark');
    this.aplicar(this.tema());
  }

  private aplicar(tema: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema);
  }
}
