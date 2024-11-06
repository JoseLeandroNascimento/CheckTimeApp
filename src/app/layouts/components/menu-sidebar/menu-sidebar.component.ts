import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MENU_OPTIONS } from '../../../shared/constants/menu.constant';
import { MenuOptionsComponent } from '../menu-options/menu-options.component';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [
    NgClass,
    MenuOptionsComponent
  ],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss'
})
export class MenuSidebarComponent {

  public showMenu:boolean = true
  protected MENU_OPTIONS = MENU_OPTIONS
}
