import { Component } from '@angular/core';
import { IPizza } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  activeCategoryId: number = 0;
  products: IPizza[] = [
    {
      id: 1,
      name: "Маргарита",
      ingredients: ["Томатный соус", "Моцарелла", "Базилик"],
      image: "https://example.com/images/margherita.jpg"
    },
    {
      id: 2,
      name: "Пепперони",
      ingredients: ["Томатный соус", "Моцарелла", "Пепперони"],
      image: "https://example.com/images/pepperoni.jpg"
    },
    {
      id: 3,
      name: "Гавайская",
      ingredients: ["Томатный соус", "Моцарелла", "Ветчина", "Ананас"],
      image: "https://example.com/images/hawaiian.jpg"
    },
    {
      id: 4,
      name: "Четыре сыра",
      ingredients: ["Томатный соус", "Моцарелла", "Горгонзола", "Пармезан", "Эдам"],
      image: "https://example.com/images/four-cheeses.jpg"
    },
    {
      id: 5,
      name: "Вегетарианская",
      ingredients: ["Томатный соус", "Моцарелла", "Огурцы", "Перец", "Грибы", "Лук"],
      image: "https://example.com/images/vegetarian.jpg"
    },
    {
      id: 6,
      name: "Мясная",
      ingredients: ["Томатный соус", "Моцарелла", "Ветчина", "Колбаса", "Говядина"],
      image: "https://example.com/images/meat-lovers.jpg"
    },
    {
      id: 7,
      name: "Пицца с морепродуктами",
      ingredients: ["Томатный соус", "Моцарелла", "Креветки", "Кальмары", "Мидии"],
      image: "https://example.com/images/seafood.jpg"
    },
    {
      id: 8,
      name: "Острая",
      ingredients: ["Томатный соус", "Моцарелла", "Перец чили", "Пепперони", "Лук"],
      image: "https://example.com/images/spicy.jpg"
    }
  ];
 



  addToCart(product: any) {

  }
}

