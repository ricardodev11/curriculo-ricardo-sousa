export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tipo: 'formacao' | 'projeto' | 'hackathon';
}
