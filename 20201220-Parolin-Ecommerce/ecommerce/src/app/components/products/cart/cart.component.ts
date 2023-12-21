import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { CartProduct } from '../../../interfaces/productInterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  productsList!: CartProduct[];
  shipping: number = 27;
  totalPrice: number = 0;
  finalPrice: number = 0;
  constructor(private productService: ProductsService) {}
  ngOnInit(): void {
    this.productsList = this.productService.productsCart;
    for (let cartProduct of this.productsList) {
      this.totalPrice += (cartProduct.product.price * cartProduct.quantity)
    }
    this.finalPrice = this.totalPrice + this.shipping;
  }

  hasProduct(): boolean{
    return this.productsList.length > 0;
  }

  confirmPurchase(): void{
    if(confirm("Do you want to confirm?")){
      this.productsList = [];
      this.productService.cartCounter = 0;
      this.productService.productsCart = [];
    }
  }
}