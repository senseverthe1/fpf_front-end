import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { Category, Product } from '../product.model';
import { ProductService } from '../product.service';
import { ViewCategoryComponent } from '../view-category/view-category.component';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})

export class ViewProductsComponent implements OnInit {

  products!: Product[]
  category!: Category[]

  displayedColumns = ['id','name','description','category','price','actions']
  dataSource!: MatTableDataSource<Product>;

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  
  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.dataSource = new MatTableDataSource(products)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort
    })

    this.productService.readCat().subscribe(categoria => {
      this.category = categoria
    });
  }

  openDialog(id: any, name: any): void {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '30%',
      data: {id: id, name: name},
    });

  dialogRef.afterClosed().subscribe(result => {
      this.productService.read().subscribe(products => {
        this.dataSource = new MatTableDataSource(products)
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.matSort
      })
    });
  }

  openDialogCat(): void {
    const dialogRef = this.dialog.open(ViewCategoryComponent, {
      width: '30%',
    });

  dialogRef.afterClosed().subscribe(result => {
    });
  }

  filter(cat: any): void{
    this.productService.readProdCat(cat).subscribe(products => {
      this.dataSource = new MatTableDataSource(products)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.matSort
    })
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

}
