import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button [disabled]="disabled">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

  @Input() disabled: boolean = false;


}
