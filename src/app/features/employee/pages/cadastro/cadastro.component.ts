import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    EmployeeFormComponent,
    CardComponent
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {

}
