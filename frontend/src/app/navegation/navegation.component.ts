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
    { icon: '/assets/icons/minha-terra.svg', title: 'Minha Terra' },
    { icon: '/assets/icons/ia.svg', title: 'I.A.' },
    { icon: '/assets/icons/consultoria.svg', title: 'Consultoria' },
    { icon: '/assets/icons/historico.svg', title: 'Histórico' }
  ];
}
