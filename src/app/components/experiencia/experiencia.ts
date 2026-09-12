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
      periodo: '2026 — Presente',
      titulo: 'Desenvolvedor Full-Stack / Hackathon',
      instituicao: 'Hackathon Proenergia Summit 2026',
      descricao: 'Desenvolvimento de soluções web interativas e de alto impacto focadas no setor energético com Angular 22, TypeScript e arquitetura moderna.',
      tipo: 'hackathon',
    },
    {
      id: 2,
      periodo: '2025 — 2026',
      titulo: 'Projetos Web & Aperfeiçoamento Full-Stack',
      instituicao: 'Desenvolvimento Contínuo',
      descricao: 'Criação de interfaces responsivas, estruturação de dados semânticos com HTML5, estilização modular com SCSS e boas práticas de componentização.',
      tipo: 'projeto',
    },
    {
      id: 3,
      periodo: '2024 — 2025',
      titulo: 'Formação em Desenvolvimento de Software',
      instituicao: 'Estudos em Tecnologia da Informação',
      descricao: 'Base sólida em lógica de programação, fundamentos de computação, controle de versão com Git e desenvolvimento web.',
      tipo: 'formacao',
    },
  ]);
}
