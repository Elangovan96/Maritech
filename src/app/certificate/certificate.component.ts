import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  openClient() {
    this.router.navigate(['/']);
  }

  openHome(){
    this.router.navigate(['/Home']);
  }

  openAbout() {
    this.router.navigate(['/About']);
  }

  openContact() {}

    openCertificate() {
    this.router.navigate(['/Certificates']);
  }


}
