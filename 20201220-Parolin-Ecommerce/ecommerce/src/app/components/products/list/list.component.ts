import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { ProductsService } from '../../../services/products.service';
import { productInterface } from '../../../interfaces/productInterface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router) {}
  productsList: productInterface[] = []

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      this.loadList(response.get("category") || undefined)
    })
  }

  loadList(id?: string) {
    if (id) {
      this.productService.getProductsByCategory(parseInt(id)).subscribe(
        (response) => {
          console.log(response)
          this.productsList = response;
        }
      );
    } else {
      this.productService.getProducts().subscribe(
        (response) => {
          this.productsList = response;
        });
    }
  }

  imageNotFound(event: Event): void {
    (event.target as HTMLImageElement).src = "https://i.pinimg.com/736x/3a/67/19/3a67194f5897030237d83289372cf684.jpg"
  }
}