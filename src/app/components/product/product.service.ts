import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Category, Product } from './product.model'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://127.0.0.1:8000/produto/'
  baseUrlcat = 'http://127.0.0.1:8000/categoria/'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readProdCat(id: string): Observable<Product[]>{
    const url = `${this.baseUrl}?categoria=${id}`
    return this.http.get<Product[]>(url)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}${id}/`
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}${product.id}/`
    return this.http.put<Product>(url, product)
  }

  delete(id: string): Observable<Product>{
    const url = `${this.baseUrl}${id}/`
    return this.http.delete<Product>(url);
  }

  createCat(category: Category): Observable<Category>{
    return this.http.post<Category>(this.baseUrlcat, category)
  }

  readCat(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrlcat)
  }

  readByIdCat(id: string): Observable<Category>{
    const url = `${this.baseUrlcat}${id}/`
    return this.http.get<Category>(url)
  }

  updateCat(category: Category): Observable<Category>{
    const url = `${this.baseUrlcat}${category.id}/`
    return this.http.put<Category>(url, category)
  }

  deleteCat(id: string): Observable<Category>{
    const url = `${this.baseUrlcat}${id}/`
    return this.http.delete<Category>(url);
  }
}
