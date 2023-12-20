import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { productInterface } from '../../../interfaces/productInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  constructor(private service: ProductsService, private route: ActivatedRoute){}

    productImg: string= '';
    quantity: number = 1;

    product: productInterface = {
    id: 0,
    title: "",
    price: 0,
    category: {
      id: 0,
      img: "",
      name: ""
    },
    description: "",
    images: []
  };

  ngOnInit(): void {
    
    this.service.getProduct(this.route.snapshot.params['id']).subscribe((res)=> {
      this.product = res;
      this.productImg = res.images[0];
    })
  }

  changeImage(url: string){
    this.productImg = url;
  }

  addToCart(): void{
    if(confirm("Do you want to add the product?")){
      this.service.addToCart(this.product , this.quantity);
      alert("Product added succesfully")
    }
  }
}
