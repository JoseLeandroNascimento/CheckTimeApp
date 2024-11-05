import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {

  public form = new FormGroup({
    nome: new FormControl<string>("",{nonNullable:true}),
    cpf: new FormControl<string>("",{nonNullable:true}),
  })
}
