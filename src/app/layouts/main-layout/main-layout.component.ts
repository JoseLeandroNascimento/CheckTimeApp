import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSidebarComponent } from '../components/menu-sidebar/menu-sidebar.component';
import { HeaderLayoutMainComponent } from '../components/header-layout-main/header-layout-main.component';
import { FooterLayoutMainComponent } from '../components/footer-layout-main/footer-layout-main.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuSidebarComponent,
    HeaderLayoutMainComponent,
    FooterLayoutMainComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
