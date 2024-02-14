import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CommonserviceService } from 'src/app/service/commonservice.service';

@Component({
  selector: 'app-bx-btmcards',
  templateUrl: './bx-btmcards.component.html',
  styleUrls: ['./bx-btmcards.component.scss']
})
export class BxBtmcardsComponent  implements OnInit{

  public productlist : any //to store products

  //replica of product list
  public filterCategory : any;
  searchKey:string ="";
  
  constructor(private commonService:CommonserviceService, private cartService:CartService){}

  ngOnInit():void{
    this.commonService.getproducts().subscribe(res => {
      console.log(res);
      this.productlist = res; // store the products in productlist
      this.filterCategory = res;  //to show all product when top card all product is clicked

      //categories product topcard
      this.productlist.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }
      });
      
    });

    //get searchtext from header by subscribing the service
    this.commonService.search.subscribe(val => {
      this.searchKey = val;
    })
  }

  //to add product to cart
  addtocart(item:any){
    this.cartService.addtoCart(item);
    alert("Item added to your cart")
  }

  filter(category:string){
    this.filterCategory = this.productlist.filter((a:any) => {
      if(a.category == category || category == ''){
        return a;
      }
    })
  }
}
