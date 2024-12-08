import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-advantage',  
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './advantage.component.html',
  styleUrl: './advantage.component.scss'
})
export class AdvantageComponent { 
  @Input() advantageName: string = '';
  @Input() advantageDescription: string = '';
  @Input() advantageImage: string = ''; 
}