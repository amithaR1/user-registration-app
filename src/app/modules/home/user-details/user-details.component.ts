import { Component, OnInit } from '@angular/core';
import { UserRegistrationForm } from 'src/app/shared/model/user.model';
import { SharedService } from 'src/app/shared/service/shared.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public userDetails: UserRegistrationForm[] = [];
  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.getUserDetails();
  }
  // fetch submitted user details array data
  getUserDetails(): void {
    const data = this.sharedService.getUserData();
    if (data && data.length > 0) {
      data.forEach((ele: any) =>
        this.userDetails.push(new UserRegistrationForm(ele)))
    }
  }

  // delete selected user detail
  deleteSelectedUserDetails(index: number): void {
    this.userDetails.splice(index, 1);
    this.sharedService.nextSetUserData(this.userDetails);
  }
}
