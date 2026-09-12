import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  email = signal('riccsousa002211@gmail.com');
  copiado = signal(false);

  // Clipboard API nativa com feedback reativo via Signal
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  }
}
