import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  private readonly primaryClassList = " text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  private readonly secondaryClassList = " text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"

  @HostBinding("class") private classList: string = "focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"

  @Input() set stypeButton(type: "primary" | "secondary") {

    switch (type) {

      case 'primary':
        this.classList += this.primaryClassList
        break;
      case "secondary":
        this.classList += this.secondaryClassList
        break;
      default:
        this.classList += this.primaryClassList
        break;
    }
  }



}
