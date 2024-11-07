import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [
    FormsModule,
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
export class InputDateComponent implements ControlValueAccessor {



  public label = input<string>("")
  public mask = input<string>()
  public disable = input<boolean>(false)
  public controlDisabled = signal(this.disable())

  private _value: string | null = null
  public onChange = (value: Date) => { }
  public onTouched = () => { }

  set value(v: string | null) {

    if(v != null)
      this.onChange(new Date(v))

    this._value = v;
  }

  get value() {
    return this._value
  }


  writeValue(value: Date | null): void {

    this.value = value?.toISOString().split('T')[0] ?? null;
   
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

    return value?.toLocaleDateString('pt-BR')
  }

  numberToDateString(number: string): string {

    return `${number.substring(0, 2)}/${number.substring(2, 4)}/${number.substring(4)}`
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
