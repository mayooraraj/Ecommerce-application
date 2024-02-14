import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-bx-cart',
  templateUrl: './bx-cart.component.html',
  styleUrls: ['./bx-cart.component.scss']
})
export class BxCartComponent implements OnInit {

  public products:  any =[];

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    //to display all the products in cart to cartpage
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
    })
  }
}
