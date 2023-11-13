import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  data!: Product;

  constructor(
    public dialogRef: MatDialogRef<ProductComponent>,

    @Inject(MAT_DIALOG_DATA) public productData: any
  ) {
    this.data = productData.from;
  };

  ngOnInit(): void {
   
  }
  
  ngOnDestroy() {}

 closeModal() {
    this.dialogRef.close('close');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


