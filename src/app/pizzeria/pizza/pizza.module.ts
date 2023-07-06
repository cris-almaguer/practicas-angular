import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzeriaComponent } from './../pizzeria.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';



@NgModule({
  declarations:
  [
    PizzeriaComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  exports:
  [
    PizzeriaComponent
  ]
})
export class PizzaModule { }
