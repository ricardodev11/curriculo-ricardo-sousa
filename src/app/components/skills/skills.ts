import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  // 1. Estado de Origem: Todas as habilidades cadastradas
  skills = signal<Skill[]>([
    { nome: 'HTML5 Semântico', categoria: 'Frontend', nivel: 'Intermediário', icone: '🌐' },
    { nome: 'CSS3 & SCSS', categoria: 'Frontend', nivel: 'Intermediário', icone: '🎨' },
    { nome: 'Angular 22', categoria: 'Frontend', nivel: 'Em Formação', icone: '🅰️' },
    { nome: 'TypeScript', categoria: 'Frontend', nivel: 'Fundamentos', icone: '🔷' },
    { nome: 'Node.js & npm', categoria: 'Ferramentas', nivel: 'Ambiente', icone: '🟢' },
    { nome: 'Git & GitHub', categoria: 'Ferramentas', nivel: 'Fundamentos', icone: '📦' },
    { nome: 'VS Code & Antigravity', categoria: 'Ferramentas', nivel: 'Uso Diário', icone: '⚡' },
  ]);

  // 2. Estado de Origem: Qual categoria está selecionada no filtro
  filtroAtivo = signal<string>('Todos');

  // 3. Estado Derivado (computed): Extrai as categorias únicas automaticamente
  categorias = computed(() => {
    const categoriasUnicas = [...new Set(this.skills().map((s) => s.categoria))];
    return ['Todos', ...categoriasUnicas];
  });

  // 4. Estado Derivado (computed): Retorna apenas as skills da categoria selecionada
  skillsFiltradas = computed(() => {
    const categoria = this.filtroAtivo();
    if (categoria === 'Todos') {
      return this.skills();
    }
    return this.skills().filter((skill) => skill.categoria === categoria);
  });

  // Ação disparada no clique do botão de filtro
  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
