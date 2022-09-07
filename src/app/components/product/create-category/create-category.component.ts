import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = {
    category_name: '',
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(): void{
    this.productService.createCat(this.category).subscribe(()=>{
      this.productService.showMessage('Created category!')
    })
    this.router.navigate(['/products'])
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
