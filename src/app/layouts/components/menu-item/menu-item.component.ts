import { Component, input, OnInit } from '@angular/core';
import { IMenuOption } from '../../../shared/interfaces/menu.interface';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    SafeHtmlPipe,
    RouterModule
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit{

  itemMenu = input.required<IMenuOption>()
  index!: number;

  ngOnInit(): void {
    this.index = Date.now()
  }

}
