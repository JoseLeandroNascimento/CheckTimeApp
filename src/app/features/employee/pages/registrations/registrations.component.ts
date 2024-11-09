import { Component } from '@angular/core';
import { EmproyeeListComponent } from '../../components/list/emproyee-list/emproyee-list.component';

@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [
    EmproyeeListComponent
  ],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent {

}
