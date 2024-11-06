import { Component, input } from '@angular/core';
import { IMenuOption } from '../../../shared/interfaces/menu.interface';
import { RouterModule } from '@angular/router';
import { SafeHtmlPipe } from '../../../shared/pipes/safe-html.pipe';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'app-menu-options',
  standalone: true,
  imports: [
    SafeHtmlPipe,
    RouterModule,
    MenuItemComponent
  ],
  templateUrl: './menu-options.component.html',
  styleUrl: './menu-options.component.scss'
})
export class MenuOptionsComponent {

  options = input.required<IMenuOption[]>();

}
