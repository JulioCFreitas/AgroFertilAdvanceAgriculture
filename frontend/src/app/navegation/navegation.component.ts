import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importar RouterModule para usar routerLink

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicionar RouterModule aqui
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent {
  features = [
    { icon: '/assets/svg/minha-terra.jpg', title: 'Minha Terra', route: '/minha-terra' },
    { icon: '/assets/svg/ia.webp', title: 'I.A.', route: '/ia' },
    { icon: '/assets/svg/consultoria.jpeg', title: 'Consultoria', route: '/consultoria' },
    { icon: '/assets/svg/historico.jpeg', title: 'Histórico', route: '/historico' }
  ];
}
