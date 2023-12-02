import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import productData from '../product/product.json'
import { Product } from '../product/product';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';

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
  products: Product[] = productData;
  configuredLanguages: Array<String> = ['English', 'Tamil'];
  language: String = 'English';
  wid: number = 3;
  dialogWid: String = '500px';

  openClient() {
    this.router.navigate(['/']);
  }

  setLanguage(lang: any) {}

  openAbout() {
    this.router.navigate(['/About']);
  }

  openContact() {
    this.router.navigate(['/Contact']);
  }

  openCertificate() {
    this.router.navigate(['/Certificates']);
  }

  viewDetails(product: any) {
    this.blurData = true;
    const dialogRef = this.dialog.open(ProductComponent, {
      width: 'this.dialogWid',
      maxHeight: '90vh',
      panelClass: ['modalbox'],
      data: { from: product },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
    this.blurData = false;
  }
}
