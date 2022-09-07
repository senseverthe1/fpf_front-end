import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCategoryComponent } from './components/product/create-category/create-category.component';

import { CreateComponent } from './components/product/create/create.component';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import { UpdateCategoryComponent } from './components/product/update-category/update-category.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [
 { 
    path:"",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductComponent
  },
  {
    path:"products/create",
    component: CreateComponent
  },
  {
    path:"products/update/:id",
    component: UpdateProductComponent
  },
  {
    path:"products/delete/:id",
    component: DeleteProductComponent
  },
  {
    path:"category/update/:id",
    component: UpdateCategoryComponent
  },
  {
    path:"category/create",
    component: CreateCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
