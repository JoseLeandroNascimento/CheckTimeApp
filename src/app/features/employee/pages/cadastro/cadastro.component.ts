import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';
import { EmployeeRegister } from '../../components/form/employee-form/employee-resgister.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    EmployeeFormComponent,
    CardComponent,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

    form = new FormGroup({
      nome: new FormControl<string>("",{nonNullable:true}),
      cpf: new FormControl<string>("",{nonNullable:true}),
      sexo: new FormControl<"M" | "F" | null>(null),
    })

   
    registerEmployeeHandle(event:EmployeeRegister){

      
      console.log(event);
      
    }

}
