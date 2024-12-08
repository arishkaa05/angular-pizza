import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBlockComponent } from './pages/website/form-block/form-block.component';
import { HeaderComponent } from './pages/website/header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormBlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bigbasket_ecommerce_angular';
}
