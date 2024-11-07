import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputDateComponent } from '../../../../../shared/components/input-date/input-date.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { Option } from '../../../../../shared/components/select/option';
import { SelectComponent } from '../../../../../shared/components/select/select.component';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent,
    InputDateComponent,
    ReactiveFormsModule,
    JsonPipe,
    
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {


  public form = new FormGroup({
    nome: new FormControl<string>("",{nonNullable:true}),
    cpf: new FormControl<string>("",{nonNullable:true}),
    sexo: new FormControl<"M" | "F" | null>(null),
    dataNascimento: new FormControl<Date | null>(new Date(),{nonNullable:true})
  })

  public sexos: Option<"M" | "F">[] = [
    {label: "Masculino",value:"M"},
    {label: "Feminino",value:"F"},
  ]
}
