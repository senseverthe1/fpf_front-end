import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component'
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { CreateComponent } from './components/product/create/create.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewProductsComponent } from './components/product/view-products/view-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { UpdateProductComponent } from './components/product/update-product/update-product.component'
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { DeleteProductComponent } from './components/product/delete-product/delete-product.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewCategoryComponent } from './components/product/view-category/view-category.component';
import { UpdateCategoryComponent } from './components/product/update-category/update-category.component';
import { CreateCategoryComponent } from './components/product/create-category/create-category.component';
import { DeleteCategoryComponent } from './components/product/delete-category/delete-category.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    CreateComponent,
    ViewProductsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewCategoryComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    DeleteCategoryComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [{
      provide: LOCALE_ID,
    useValue: 'pt-br'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
