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

  public value: string | null = null
  public onChange = (value: Date) => { }
  public onTouched = () => { }

  public selectData() {
    if (this.value) {
      
      const dataSelect = this.parseDate(this.numberToDateString(this.value))      
      if (dataSelect != null)
        this.onChange(dataSelect)
    }
  }

  ngOnInit(): void {
    initFlowbite()
  }

  writeValue(value: Date): void {

    this.value = this.convertDateToString(value)
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

  convertDateToString(value: Date): string {

    return value.toLocaleDateString('pt-BR')
  }

  numberToDateString(number:string):string{

    return `${number.substring(0,2)}/${number.substring(2,4)}/${number.substring(4)}`
  }

  parseDate(dateString: string): Date | null {
    const partes = dateString.split('/');
    if (partes.length !== 3) {
      console.error('Data inválida. O formato esperado é dd/mm/aaaa.');
      return null;
    }

    const [dia, mes, ano] = partes.map(num => parseInt(num, 10));
    if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
      console.error('Data inválida. Os valores de dia, mês e ano precisam ser numéricos.');
      return null;
    }

    return new Date(ano, mes - 1, dia);
  }
}
