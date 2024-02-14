import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-image',
  templateUrl: './bx-image.component.html',
  styleUrls: ['./bx-image.component.scss']
})
export class BxImageComponent {
 @Input() img!:string;
 @Input() class:any;
}
