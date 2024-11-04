import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    EmployeeFormComponent
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
