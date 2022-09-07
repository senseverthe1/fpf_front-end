import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Category, Product } from '../product.model';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = {
    name: "",
    description: "",
    category: undefined,
    price: 0,
  }

  category!: Category[]

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.readCat().subscribe(categoria => {
      this.category = categoria
    });
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Product created!')
    })
    this.router.navigate(['/products'])
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
