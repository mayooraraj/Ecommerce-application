import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bx-input-field',
  templateUrl: './bx-input-field.component.html',
  styleUrls: ['./bx-input-field.component.scss']
})
export class BxInputFieldComponent {
  @Input() type!: string;
  @Input() placeholder!: string ;
  @Input() imageUrl!: string ;
  @Input() formControls!:string ;
  @Input() parentForm!: FormGroup;
  @Input() class!:any; 
  @Input() style!:any;
 
}
