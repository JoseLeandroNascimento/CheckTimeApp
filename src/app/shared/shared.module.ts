import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    InputComponent
  ],
  exports:[
    CardComponent,
    InputComponent
  ]
})
export class SharedModule { }
