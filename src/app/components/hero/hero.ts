import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  // Signals: o coração reativo dos nossos dados
  nome = signal('Ricardo Sousa');
  papel = signal('Desenvolvedor Full-Stack');
  bio = signal('Focado em criar soluções web modernas, limpas e de alto desempenho.');
}
