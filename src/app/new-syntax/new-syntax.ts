import { AsyncPipe, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-new-syntax',
  imports: [AsyncPipe, NgStyle, NgClass],
  templateUrl: './new-syntax.html',
  styleUrl: './new-syntax.css',
})
export class NewSyntax {
  isAdmin = true;

  private productsSubject = new BehaviorSubject([
    {
      "id": 1,
      "name": "T-Shirt Classique",
      "price": 20,
      "description": "Un t-shirt classique confortable et élégant en 100% coton.",
      "imageUrl": "https://placehold.co/600x400/cccccc/000000?text=T-Shirt"
    },
    {
      "id": 2,
      "name": "Jeans Modernes",
      "price": 55,
      "description": "Jean en denim de haute qualité avec une coupe slim moderne.",
      "imageUrl": "https://placehold.co/600x400/cccccc/000000?text=Jeans"
    },
    {
      "id": 3,
      "name": "Baskets de Course",
      "price": 80,
      "description": "Baskets légères et durables, parfaites pour votre course quotidienne.",
      "imageUrl": "https://placehold.co/600x400/cccccc/000000?text=Baskets"
    },
    {
      "id": 4,
      "name": "Portefeuille en Cuir",
      "price": 45,
      "description": "Un portefeuille en cuir élégant et durable avec plusieurs fentes pour cartes.",
      "imageUrl": "https://placehold.co/600x400/cccccc/000000?text=Portefeuille"
    },
    {
      "id": 5,
      "name": "Lunettes de Soleil",
      "price": 120,
      "description": "Lunettes de soleil élégantes avec protection UV.",
      "imageUrl": "https://placehold.co/600x400/cccccc/000000?text=Lunettes"
    },
  ]);

  products$ = this.productsSubject.asObservable();

  changeStatus() {
    this.isAdmin = !this.isAdmin;
  }
}
