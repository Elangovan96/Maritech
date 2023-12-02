import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  wid: number = 3;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.wid = (window.innerWidth <= 768) ? 1 : 3;

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


  openHome(){
    this.router.navigate(['/Home']);
  }

  openClient() {
    this.router.navigate(['/']);
  }

}
