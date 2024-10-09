import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent {
  constructor(private router: Router) {}

  // Métodos de navegação para os botões
  navigateToMinhaterra() {
    this.router.navigate(['/minha-terra']); // Rota correta para Minha Terra
  }

  navigateToIA() {
    this.router.navigate(['/ia']); // Rota correta para I.A.
  }

  navigateToConsultoria() {
    this.router.navigate(['/consultoria']); // Rota correta para Consultoria
  }

  navigateToHistorico() {
    this.router.navigate(['/historico']); // Rota correta para Histórico
  }

  // Outros métodos existentes
  learnMore() {
    alert('Em breve você poderá conhecer mais sobre o nosso trabalho!');
  }

  navigateToNavigation() {
    this.router.navigate(['/navigation']);
  }

  navigateToInsights() {
    this.router.navigate(['/insights']);
  }
}
