import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  momentForm!: FormGroup;

  category: Category = {
    category_name: '',
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      category_name: new FormControl('', [Validators.required]),
    })
  }

  get category_name(){
    return this.momentForm.get('category_name')!
  }

  createCategory(): void{
    if(this.momentForm.invalid){
      this.productService.showMessage('All fields must be filled!')
      return;
    }
    this.productService.createCat(this.category).subscribe(()=>{
      this.productService.showMessage('Created category!')
    })
    this.router.navigate(['/products'])
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
