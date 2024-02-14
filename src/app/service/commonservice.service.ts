import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  Api ="http://localhost:3000/comments";

//search text is in header need to pass it in product component
  public search = new BehaviorSubject<string>("");
  
  constructor(private http:HttpClient) { }

  getproducts(){
    return this.http.get(this.Api);
  }

}
