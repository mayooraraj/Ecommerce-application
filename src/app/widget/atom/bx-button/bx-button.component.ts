import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bx-button',
  templateUrl: './bx-button.component.html',
  styleUrls: ['./bx-button.component.scss']
})
export class BxButtonComponent {
  @Input() btnText!:string;
  @Input() style: any;
  @Input() fontSize!: string
  @Input() class : any;
  @Output() dynamicClickEvent = new EventEmitter<void>();

  emitClickEvent(){
    this.dynamicClickEvent.emit();
  }
}
