import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Country } from './country';
import countryData from '../contact/countries.json'
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(public router: Router,public routerData: ActivatedRoute,private snackBar: MatSnackBar) {
  }

  country: Country[] = countryData;
  name: String = '';
  email: String = '';
  phone: String = '';
  message: String = '';
  organisation: String = '';
  product: String = '';
  selectedCountry: String = '';
  response: String = '';

  sendEmail() {
    if(this.validateForm()){
      console.log(this.name);
      console.log(this.email);
      console.log(this.phone);
      console.log(this.message);
      console.log(this.organisation);
      console.log(this.product);
      console.log(this.selectedCountry); 
      this.response = 'Successfully submitted the request';
    // emailjs.send("service_1ti7phm","template_pbzgy8q",{
    //   from_name: "Elangovan",
    //   to_name: "Test",
    //   message: "Testing",
    //   },"mrx5G72XIiVIMd1Sn");
  } else {
        this.response = 'Kindly fill all the required details';
    }
  }


  ngOnInit(): void {
    if(this.routerData.snapshot.params['name']) {
      this.product = this.routerData.snapshot.params['name'];
    }
  }

  validateForm() {
    return (
      this.name != '' &&
      this.email != '' &&
      this.phone != '' &&
      this.message != '' &&
      this.organisation != '' &&
      this.selectedCountry != ''
    );
  }

  detectChange(key: String) {}

  openClient() {
    this.router.navigate(['/']);
  }

  openHome() {
    this.router.navigate(['/Home']);
  }

  openContact() {
    this.router.navigate(['/Contact']);
  }

  openSolutions() {
    this.router.navigate(['/Solution']);
  }

}
