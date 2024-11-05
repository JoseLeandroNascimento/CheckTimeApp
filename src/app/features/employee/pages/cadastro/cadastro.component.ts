import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    EmployeeFormComponent,
    SharedModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
