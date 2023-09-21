import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.array([])
    });
    this.setInitialAdrressVal();
  }
  //get address data list
  get addressList(): FormArray {
    return this.registrationForm.get("address") as FormArray;
  }

  //set default address  
  setInitialAdrressVal(): void {
    this.addressList.push(this.createAddress('Bangalore', 'Karnataka', 123456))
  }
  //push new address data into address form array
  addNewAddressRow(): void {
    this.addressList.push(this.createAddress())
  }

  //address data creation
  createAddress(cityVal?: string, stateVal?: string, pincodeVal?: number): FormGroup {
    return this.formBuilder.group({
      city: [cityVal, Validators.required],
      state: [stateVal, Validators.required],
      pincode: [pincodeVal, [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  //delete recently added object from address form array only if address array conatins atleast one address object 
  deleteAddressRow(): void {
    if (this.addressList.length > 1) {
      this.addressList.removeAt(this.addressList.length - 1);
    } else {
      alert("One set of Address should be mandatory");
    }
  }

  submitForm(): void {
    console.log(this.registrationForm.value);
  }

}
