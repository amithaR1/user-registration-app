import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userDetails = new BehaviorSubject([]);
  sharedUserDetails = this.userDetails.asObservable();
  constructor() { }
  getUserData() {
    return this.userDetails.value;
  }
  nextSetUserData(val: any) {
    this.userDetails.next(val)
  }
}
