import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: '2026',
      titulo: 'Desenvolvedor Full-Stack / Hackathon',
      instituicao: 'Hackathon Proenergia Summit 2026',
      descricao: 'Desenvolvimento de soluções web interativas e de alto impacto focadas no setor energético com Angular 22, TypeScript e arquitetura moderna.',
      tipo: 'hackathon',
    },
    {
      id: 2,
      periodo: '2026 — 2029',
      titulo: 'Formação em Tecnologia & Desenvolvimento de Software',
      instituicao: 'Graduação / Estudos em Tecnologia',
      descricao: 'Aprofundamento contínuo em arquitetura de software, ecossistema web full-stack moderno, estruturas de dados e boas práticas de desenvolvimento.',
      tipo: 'formacao',
    },
  ]);
}
