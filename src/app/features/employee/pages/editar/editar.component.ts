import { Component } from '@angular/core';
import { EmployeeFormComponent } from '../../components/form/employee-form/employee-form.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [
    EmployeeFormComponent
  ],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {

}
