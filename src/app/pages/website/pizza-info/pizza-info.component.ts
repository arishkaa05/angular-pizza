
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdvantageComponent } from '../../../shared/components/advantage/advantage.component';
@Component({
  selector: 'app-pizza-info',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, AdvantageComponent],
  templateUrl: './pizza-info.component.html',
  styleUrl: './pizza-info.component.scss'
})
export class PizzaInfoComponent implements OnInit {

  info: {
    id: number
    name: string
    description: string
    image: string
  }[] = [{
    id: 1,
    name: 'Лучшее тесто',
    description: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
    image: 'hop'
  },
  {
    id: 2,
    name: 'гарантия качества',
    description: 'Наша пиццерия получила множество наград и  признаний по всему миру',
    image: 'seo-and-web'
  },
  {
    id: 3,
    name: 'лучшие повара',
    description: 'Пиццы готовят самые  профессиональные итальянские повара',
    image: 'kitchen-pack'
  },
  {
    id: 4,
    name: 'отборные рецепты',
    description: 'Мы используем рецепты от мировых лидеров   в изготовлении пиццы',
    image: 'holidays'
  },
    ]
  constructor() {

  }

  ngOnInit(): void {
  }
  scrollToPizza(event: Event): void {
    event.preventDefault();
    const target = document.querySelector('#pizza');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }


}
