import { Component, ElementRef, input, OnInit, signal, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    NgxMaskDirective,
    FormsModule
  ],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputDateComponent
    }
  ]
})
export class InputDateComponent implements OnInit, ControlValueAccessor {


  @ViewChild('datePickerInput', { static: false }) datePickerInput!: ElementRef;

  public label = input<string>("")
  public mask = input<string>()
  public disable = input<boolean>(false)
  public controlDisabled = signal(this.disable())

  public value: Date | null = null
  public onChange = (value: Date) => { }
  public onTouched = () => { }

  public selectData(){
    if(this.value){
      this.onChange(this.value)
    }
  }

  ngOnInit(): void {
    initFlowbite()
  }

  writeValue(value: Date): void {
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
