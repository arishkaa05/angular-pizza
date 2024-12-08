import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'apply-form',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule, ],
  templateUrl: './apply-form.component.html',
  styleUrl: './apply-form.component.scss'
})
export class ApplyFormComponent { 
  @Output() addProductToCart = new EventEmitter<void>();
  applyForm: FormGroup;
  nameControl: AbstractControl;
  addressControl: AbstractControl;
  phoneControl: AbstractControl;
  submitted = false;
  openPopup = false;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[^\.]*$/)]], 
      address: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^(\+?\d{11})$/)]],
    });

    this.nameControl = this.applyForm.controls['name'];
    this.addressControl = this.applyForm.controls['address'];
    this.phoneControl = this.applyForm.controls['phone'];
  }

  submitFrom() {
    this.submitted = true;
    if (this.applyForm.invalid) {
      return;  
    }
      console.log("Form submitted", this.applyForm.value); 
      this.openPopup = true
      this.applyForm.reset();  
      this.submitted = false;  
  }


  closePopup() {
    this.openPopup = false;
  }


}
