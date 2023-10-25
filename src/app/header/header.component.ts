import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  showMobileMenu: boolean = false;
  products: Array<String> = ['HOME', 'PRODUCT', 'CONTACT','HOME', 'PRODUCT', 'CONTACT'];
  configuredLanguages: Array<String> = ['English', 'Tamil'];
  language: String = "English";


  openClient(){

  }


  setLanguage(lang: any) {
    
  }

  openAbout(){
    this.router.navigate(['/About']);
  }

  openContact(){

  }

  viewDetails(product : any) {
    console.log('The dialog was closed');
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '500px',
      maxHeight: '90vh',
      autoFocus: false,
      panelClass: 'offerDetailsDialog',
      data: { from: product },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  

}
