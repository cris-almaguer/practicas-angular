import { FormsModule } from '@angular/forms';
import { CinepolisComponent } from './../cinepolis.component';
import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';



@NgModule({
  declarations:
  [
    CinepolisComponent
  ],
  imports:
  [
    CommonModule,
    FormsModule,
    NgIf,
  ],
  exports:
  [
    CinepolisComponent
  ]
})
export class CineModule { }
