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
    let flag = false;
    for(let productCart of this.productsCart) {
      if (productCart.product.id == product.id) {
        productCart.quantity += quantity;
        flag = true;
      }
    }
    if (!flag) {
      this.productsCart.push({product: product, quantity: quantity});
    }
    this.cartCounter += quantity;
  }

  public emptyCart(): void {
    this.productsCart = [];
    this.cartCounter = 0;
  }

  public getCartCounter(): number {
    return this.cartCounter;
  }

  public filterList(filterURL: string | null): Observable<productInterface[]> {
    let urlget = this.url_products + "/?" + filterURL
    return this.http.get<productInterface[]>(urlget)
  }
}

