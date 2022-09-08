import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  momentForm!: FormGroup;

  category: Category = {
    id: 0,
    category_name: '',
  }

  constructor(
    private productService: ProductService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id']
        const category$ = this.productService.readByIdCat(id);
        category$.subscribe((category) => {
          this.category = category;
        })
      }
    );

    
    this.momentForm = new FormGroup({
      category_name: new FormControl('', [Validators.required]),
    })
  }


  get category_name(){
    return this.momentForm.get('category_name')!
  }

  updateCategory(): void{
    if(this.momentForm.invalid){
      this.productService.showMessage('All fields must be filled!')
      return;
    }
    this.productService.updateCat(this.category).subscribe(() => {
      this.productService.showMessage("Category updated successfully!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
