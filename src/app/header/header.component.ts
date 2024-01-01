import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { Product } from '../product/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  blurData: boolean = false;
  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(): void {
    this.wid = window.innerWidth <= 768 ? 1 : 3;
    this.dialogWid = window.innerWidth <= 768 ? '500px' : '1000px';
  }

  showMobileMenu: boolean = false;
  configuredLanguages: Array<String> = ['English', 'Tamil'];
  language: String = 'English';
  wid: number = 3;
  dialogWid: String = '500px';

  openClient() {
    this.router.navigate(['/']);
  }

  setLanguage(lang: any) {}

  openSolution() {
    this.router.navigate(['/Solution']);
  }

  openContact() {
    this.router.navigate(['/Contact']);
  }

}
