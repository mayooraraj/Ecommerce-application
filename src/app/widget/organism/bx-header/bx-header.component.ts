import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { CommonserviceService } from 'src/app/service/commonservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bx-header',
  templateUrl: './bx-header.component.html',
  styleUrls: ['./bx-header.component.scss']
})
export class BxHeaderComponent implements OnInit{

  public totalItem: number = 0;
  public searchTerm : string ='';

  constructor(private cartService:CartService,  private commonService :CommonserviceService, private router : Router){}

  ngOnInit(): void {
    //to show the the numbers of item in cart
    this.cartService.getProducts().subscribe(res => {
      this.totalItem=res.length;
    })  
  }

  // Check if token exists in localStorage
  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to log out.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove token from localStorage
        localStorage.removeItem('token');
        // Redirect to login page
        this.router.navigate(['/home']);
      }
    });
  }

  search(event : any){
    //searchTerm hold the text entered in search bar
    this.searchTerm = (event.target as HTMLInputElement).value;
    //emit the search term with the help of service
    this.commonService.search.next(this.searchTerm);
    
  }
  
  
}
