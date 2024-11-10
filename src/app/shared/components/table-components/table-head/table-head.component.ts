import { Component, HostBinding, signal } from '@angular/core';
import { Column } from '../table/column.interface';


@Component({
  selector: 'thead[app-table-head]',
  standalone: true,
  imports: [],
  templateUrl: './table-head.component.html',
  styleUrl: './table-head.component.scss',
  
})
export class TableHeadComponent {
 
  protected columns = signal<Column[]>([])
  @HostBinding("class") private readonly containerTableHeader = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400";


  setColumn(value: Column[]): void {
    this.columns.update((v)=>value)
  }
}
