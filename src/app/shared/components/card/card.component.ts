import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fancybox } from '@fancyapps/ui';
@Component({
  selector: 'product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() productId: number = 0;
  @Input() productName: string = '';
  @Input() ingredients: string[] = [];
  @Output() addProductToCart = new EventEmitter<void>();

  addToCart() {
    this.addProductToCart.emit();
  }

  ngAfterViewInit() {
    Fancybox.bind('[data-fancybox]', {
      buttons: ['close'],
    } as any);
  }
}
