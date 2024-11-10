import { Component } from '@angular/core';
import { TableHeadComponent } from '../../../../shared/components/table-components/table-head/table-head.component';
import { Column } from '../../../../shared/components/table-components/table/column.interface';
import { TableComponent } from '../../../../shared/components/table-components/table/table.component';
import { EmproyeeListComponent } from '../../components/list/emproyee-list/emproyee-list.component';
import { TableThComponent } from '../../../../shared/components/table-components/table-th/table-th.component';

@Component({
  selector: 'app-registrations',
  standalone: true,
  imports: [
    EmproyeeListComponent,
    TableComponent,
    TableHeadComponent,
    TableThComponent
  ],
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent {

  columns: Column[] = [
    {
      label: "Nome",
      key: "nome"
    },
    {
      label: "CPF",
      key:"cpf"
    }
  ]
}
