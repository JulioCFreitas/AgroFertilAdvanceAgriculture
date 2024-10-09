import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [CommonModule], // Adicione CommonModule aqui
  templateUrl: './navegation.component.html',
  styleUrls: ['./navegation.component.scss']
})
export class NavegationComponent {
  features = [
    { icon: '/assets/svg/minha-terra.jpg', title: 'Minha Terra' },
    { icon: '/assets/svg/ia.webp', title: 'I.A.' },
    { icon: '/assets/svg/consultoria.jpeg', title: 'Consultoria' },
    { icon: '/assets/svg/historico.jpeg', title: 'Histórico' }
  ];
}
