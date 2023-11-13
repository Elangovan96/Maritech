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

  ngOnInit(): void {}

  showMobileMenu: boolean = false;
  products: Product[] = productData;
  configuredLanguages: Array<String> = ['English', 'Tamil'];
  language: String = 'English';

  openClient() {}

  setLanguage(lang: any) {}

  openAbout() {
    this.router.navigate(['/About']);
  }

  openContact() {}

  openCertificate() {
    this.router.navigate(['/Certificates']);
  }

  viewDetails(product: any) {
    this.blurData = true;
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '500px',
      maxHeight: '90vh',
      panelClass:  ["modalbox"],
      data: { from: product },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
    this.blurData = false;
  }
}
