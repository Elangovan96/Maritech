import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Solution } from '../product/solution';
import solutionData from '../product/solution.json'
import { ProductComponent } from '../product/product.component';


@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {

  blurData: boolean = false;
  solutions: Solution[] = solutionData;
  showMobileMenu: boolean = false;
  wid: number = 3;
  paddingData: String = '20px';
  dialogWid: String = '500px';

  constructor(public dialog: MatDialog, public router: Router) {}

  ngOnInit(): void {
    this.wid = window.innerWidth <= 768 ? 1 : 3;
    this.dialogWid = window.innerWidth <= 768 ? '500px' : '1000px';

  }

  openClient() {
    this.router.navigate(['/']);
  }

  openSolution() {
    this.router.navigate(['/Solution']);
  }

  openContact() {
    this.router.navigate(['/Contact']);
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
