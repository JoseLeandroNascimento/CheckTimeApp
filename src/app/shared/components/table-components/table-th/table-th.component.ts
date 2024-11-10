import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'th[app-table-th]',
  standalone: true,
  imports: [],
  templateUrl: './table-th.component.html',
  styleUrl: './table-th.component.scss'
})
export class TableThComponent {

  @HostBinding("class") containerth = "px-6 py-3"
  @HostBinding("scope") scope = "col"

}
