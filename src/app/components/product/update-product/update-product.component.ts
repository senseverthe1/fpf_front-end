import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category, Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  momentForm!: FormGroup;

  product: Product = {
    name: "",
    description: "",
    category: undefined,
    price: '',
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

  updateProduct(): void{
    if(this.momentForm.invalid){
      this.productService.showMessage('All fields must be filled!')
      return;
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
