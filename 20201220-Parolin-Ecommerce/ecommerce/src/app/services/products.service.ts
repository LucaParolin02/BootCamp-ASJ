import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartProduct, productInterface } from '../interfaces/productInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  url_products: string = "https://api.escuelajs.co/api/v1/products";

  productsCart: CartProduct[] = [];
  cartCounter: number = 0;

  public getProducts():Observable<any>{
      return this.http.get(this.url_products);
  }


  public getProduct(id:number):Observable<any>{
      return this.http.get(this.url_products + "/" + id);
  }

  public getProductsByCategory(id: number): Observable<any> {
    return this.http.get(this.url_products + "/?categoryId=" + id);
  }

  public addToCart(product: productInterface, quantity: number): void {
    this.productsCart.push({product: product, quantity: quantity});
    this.cartCounter += quantity;
  }
}
