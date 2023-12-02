import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public router: Router) {}

  name: String = '';
  email: String = '';
  phone: String = '';
  message: String = '';
  organisation: String = '';

  sendEmail() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.message);
  }

  ngOnInit(): void {}

  validateForm() {
    return (
      this.name != '' &&
      this.email != '' &&
      this.phone != '' &&
      this.message != ''
    );
  }

  detectChange(key: String) {}

  openClient() {
    this.router.navigate(['/']);
  }

  openHome() {
    this.router.navigate(['/Home']);
  }

  openAbout() {
    this.router.navigate(['/About']);
  }

  openContact() {
    this.router.navigate(['/Contact']);
  }

  openCertificate() {
    this.router.navigate(['/Certificates']);
  }
}
