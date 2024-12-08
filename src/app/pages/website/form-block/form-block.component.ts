import { Component } from '@angular/core';
import { ApplyFormComponent } from '../../../shared/components/apply-form/apply-form.component';

@Component({
  selector: 'app-form-block',
  standalone: true,
  imports: [ApplyFormComponent],
  templateUrl: './form-block.component.html',
  styleUrl: './form-block.component.scss'
})
export class FormBlockComponent {

}
