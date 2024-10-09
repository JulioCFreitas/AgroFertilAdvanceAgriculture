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
    this.router.navigate(['/minhaterra']); // Altere para a rota correta
  }

  navigateToIA() {
    this.router.navigate(['/ia']); // Altere para a rota correta
  }

  navigateToConsultoria() {
    this.router.navigate(['/consultoria']); // Altere para a rota correta
  }

  navigateToAnalise() {
    this.router.navigate(['/analise']); // Altere para a rota correta
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
