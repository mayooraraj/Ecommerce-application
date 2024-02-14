import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-bx-cart-items',
  templateUrl: './bx-cart-items.component.html',
  styleUrls: ['./bx-cart-items.component.scss']
})
export class BxCartItemsComponent implements OnInit{

  public products:  any =[];

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    //to display all the products in cart to cartpage
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
    })
  }

  // delete cart item with the help of a service
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }

  //to empty the cart
  emptyCart(){
    this.cartService.removeAllCart();
  }
}
