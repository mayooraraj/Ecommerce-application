import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Login } from '../models/userLogin';

@Injectable({
  providedIn: 'root'
})
export class ShareuserdataService {

  private loggedInUserDataSubject = new BehaviorSubject<Login | null>(null);
  loggedInUserData$ = this.loggedInUserDataSubject.asObservable();

  constructor() { }

  setLoggedInUserData(userData: Login) {
    this.loggedInUserDataSubject.next(userData);
  }
}
