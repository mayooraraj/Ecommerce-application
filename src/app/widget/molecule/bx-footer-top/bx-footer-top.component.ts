import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bx-footer-top',
  templateUrl: './bx-footer-top.component.html',
  styleUrls: ['./bx-footer-top.component.scss']
})
export class BxFooterTopComponent {
  @Input() sectionTitle!:string;
  @Input() items!: string[];
  @Input() bxIcon?:string;
  @Input() class!:any;
  @Input() id!:any;
}
