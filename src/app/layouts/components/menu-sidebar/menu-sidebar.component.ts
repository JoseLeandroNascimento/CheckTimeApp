import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss'
})
export class MenuSidebarComponent {

  public showMenu:boolean = true
}
