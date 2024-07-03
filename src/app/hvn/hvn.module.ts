import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HvnComponent } from './hvn.component';



@NgModule({
  declarations: [HvnComponent],
  imports: [
    CommonModule
  ],
  exports: [HvnComponent]
})
export class HvnModule { }
