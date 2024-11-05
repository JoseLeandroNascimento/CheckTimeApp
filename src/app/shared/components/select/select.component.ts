import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Option } from './option';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  public label = input<string>("")
  public disable = input<boolean>(false)
  public options = input<Option<any>[]>([])

  public controlDisabled = signal(this.disable())

  public value: any = null
  public onChange = (value: string) => { }
  public onTouched = () => { }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {

    this.controlDisabled.update(value => isDisabled)
  }
}
