import { AfterContentInit, Component, ContentChild, HostBinding, input } from '@angular/core';
import { TableHeadComponent } from '../table-head/table-head.component';
import { Column } from './column.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements AfterContentInit  {


  @HostBinding("class") containerTable = "relative overflow-x-auto shadow-md sm:rounded-lg"
  @ContentChild(TableHeadComponent) theadComponent?: TableHeadComponent

  columns = input<Column[]>([])
  datas = input<any[]>()


  ngAfterContentInit(): void {
    
    if(this.theadComponent){      
      this.theadComponent.setColumn(this.columns())
    }
  }

}
