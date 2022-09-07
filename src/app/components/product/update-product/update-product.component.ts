import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category, Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  product: Product = {
    name: "",
    description: "",
    category: undefined,
    price: 0,
  }

  category!: Category[]

  constructor(
    private productService: ProductService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
      this.route.params.subscribe(
        (params: any) => {
          const id = params['id']
          const product$ = this.productService.readById(id);
          product$.subscribe((product) => {
            this.product = product;
          })
        }
      );

      this.productService.readCat().subscribe(categoria => {
        this.category = categoria
      });
    }

  updateProduct(): void{
    if(this.product.category == undefined){
      this.product.category = NaN
    }
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Product successfully updated!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
