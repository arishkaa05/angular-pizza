import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { ProductsComponent } from "../products/products.component";
import { PizzaInfoComponent } from '../pizza-info/pizza-info.component';
import { FormBlockComponent } from '../form-block/form-block.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, HeaderComponent, ProductsComponent, PizzaInfoComponent, FormBlockComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {

  constructor() {

  }
}



