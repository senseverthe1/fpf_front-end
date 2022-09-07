import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category, Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
  ) { }
    
  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(id: any): void {
    this.productService.delete(id).subscribe(()=>{
      this.productService.showMessage('Product Deleted Successfully')
    })
    this.dialogRef.close();
  }

}
