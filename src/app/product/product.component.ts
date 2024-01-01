import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  data!: Product;
  isMobile: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProductComponent>,
    public router: Router,

    @Inject(MAT_DIALOG_DATA) public productData: any
  ) {
    this.data = productData.from;
  };

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
  }
  
  ngOnDestroy() {}

 closeModal() {
    this.dialogRef.close('close');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendEnquiry() {
    this.dialogRef.close();
    this.router.navigate(['/Contact', {name: this.data.title }]);

    }

}


