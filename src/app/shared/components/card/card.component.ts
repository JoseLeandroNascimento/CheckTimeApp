import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @HostBinding("class") classHost: string = "p-6 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"


}
