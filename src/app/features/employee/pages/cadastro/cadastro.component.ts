import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';
import { EmployeeRegister } from '../../components/form/employee-form/employee-resgister.interface';

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
export class CadastroComponent implements OnInit {


  @ViewChild('formRegisterEmployee',{static:true}) formRegisterEmployee!: EmployeeFormComponent

  ngOnInit(): void {

    this.formRegisterEmployee.form.patchValue({
      nome:"Leandro",
      cpf:"02705534288",
      dataNascimento: new Date(1998,11,8),
      email:"j.leandro1998silva@gmail.com",
      sexo: "M",
      tefelefone: "5568999512712"
    })

    
  }

  registerEmployeeHandle(event: EmployeeRegister) {

    if(this.formRegisterEmployee.form.valid){

      console.log(event);
      
    }

  }

}
