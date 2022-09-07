import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { Category } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  category!: Category[]

  displayedColumns = ['id','category','actions']

  constructor(
    public dialogRef: MatDialogRef<ViewCategoryComponent>,
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.productService.readCat().subscribe(categoria => {
      this.category = categoria
    });
  }

  openDialog(id: any, name: any): void {
    const dialogRef = this.dialog.open(DeleteCategoryComponent, {
      width: '30%',
      data: {id: id, category_name: name},
    });

  dialogRef.afterClosed().subscribe(result => {
      this.productService.readCat().subscribe(category => {
        this.category = category
      })
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  edit(id: any): void{
    this.dialogRef.close();
    this.router.navigate([`/category/update/${id}/`])
  }

  createCategory(): void{
    this.dialogRef.close();
    this.router.navigate([`/category/create/`])
  }

}
