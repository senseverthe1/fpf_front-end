import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(id: any): void {
    this.productService.deleteCat(id).subscribe(()=>{
      this.productService.showMessage('Category Deleted Successfully')
    })
    this.dialogRef.close();
  }

}
