import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent 
    }
  ]
})
export class InputComponent implements ControlValueAccessor{

  public label = input<string>("")
  public mask = input<string>()
  public disable = input<boolean>(false)
  public controlDisabled =  signal(this.disable())

  public value:string = ""
  public onChange = (value:string)=>{}
  public onTouched = ()=>{}

  protected inputText(value:string){
    this.onChange(value)
  }

  writeValue(value: string): void {
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
