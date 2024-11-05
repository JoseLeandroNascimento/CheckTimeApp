import { Component, input, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    NgxMaskDirective
  ],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputDateComponent 
    }
  ]
})
export class InputDateComponent implements OnInit,ControlValueAccessor{

  public label = input<string>("")
  public mask = input<string>()
  public disable = input<boolean>(false)
  public controlDisabled =  signal(this.disable())

  public value:string = ""
  public onChange = (value:string)=>{}
  public onTouched = ()=>{}

  ngOnInit(): void {
    initFlowbite()
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
