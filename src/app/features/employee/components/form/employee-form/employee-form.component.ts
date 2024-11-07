import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDateComponent } from '../../../../../shared/components/input-date/input-date.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { Option } from '../../../../../shared/components/select/option';
import { SelectComponent } from '../../../../../shared/components/select/select.component';
import { EmployeeRegister } from './employee-resgister.interface';


@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent,
    InputDateComponent,
    ReactiveFormsModule,
    
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {

  @Output() employeeRegisterEvent = new EventEmitter<EmployeeRegister>()

  protected _form = new FormGroup({
    nome: new FormControl<string>("",{nonNullable:true}),
    cpf: new FormControl<string>("",{nonNullable:true}),
    sexo: new FormControl<"M" | "F" | null>(null),
    dataNascimento: new FormControl<Date | null>(null,{nonNullable:true}),
    email: new FormControl<string>("",{nonNullable:true,validators:[Validators.email]}),
    tefelefone: new FormControl<string>("",{nonNullable:true}),
  })

  protected readonly sexos: Option<"M" | "F" | null>[] = [
    {label: "Selecione",value:null},
    {label: "Masculino",value:"M"},
    {label: "Feminino",value:"F"},
  ]

  public get form(){
    return this._form
  }

  public onSubmit(){

      this._form.markAllAsTouched()

      const event:EmployeeRegister = {
        cpf: this._form.value.cpf!,
        dataNascimento: this._form.value.dataNascimento!,
        email: this._form.value.email!,
        nome: this._form.value.nome!,
        sexo: this._form.value.sexo!,
        tefelefone: this.form.value.tefelefone!
      }
      this.employeeRegisterEvent.emit(event)

  }
}
