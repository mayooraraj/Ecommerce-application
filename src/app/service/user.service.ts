import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../models/userSignup';
import { Login } from '../models/userLogin';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //user log in and sign up
  baseUrl ='http://localhost:3000/posts';

  constructor(private http : HttpClient) { }

  postUserSignUp(data:SignUp){
    return this.http.post(this.baseUrl,data)
  }

  //to get user sign up data for login
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  //edit user profile
  updateprofile(input: any, id: any) {
    return this.http.patch(`${this.baseUrl}/${id}`, input);
  }
 
  // getUserData(): Observable<any> {
  //   // Assuming you have an endpoint to fetch user data, for example /user
  //   return this.http.get<any>(`${this.baseUrl}/user`);
  // }
  // updateprofile(input: any, id: any) {
  //   return this.http.patch(`${this.baseUrl}/${id}`, input);
  // }

  // updateUserData(userData: any): Observable<any> {
  //   // Assuming you have an endpoint to update user data, for example /user/update
  //   return this.http.put<any>(`${this.baseUrl}/user/update`, userData);
  // }

}
