import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router'
import { Category, Product } from '../product.model';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  momentForm!: FormGroup;

  product: Product = {
    name: "",
    description: "",
    category: undefined,
    price: '',
  }

  category!: Category[]

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.readCat().subscribe(categoria => {
      this.category = categoria
    });

    this.momentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      categorys: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }

  get name(){
    return this.momentForm.get('name')!
  }
  get description(){
    return this.momentForm.get('description')!
  }
  get categorys(){
    return this.momentForm.get('category')!
  }
  get price(){
    return this.momentForm.get('price')!
  }

  createProduct(): void{
    if(this.momentForm.invalid){
      this.productService.showMessage('All fields must be filled!')
      return;
    }
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMessage('Product created!')
    })
    this.router.navigate(['/products'])
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
