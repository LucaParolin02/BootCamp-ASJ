import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { productInterface } from '../../../interfaces/productInterface';
import { CategorysService } from '../../../services/categorys.service';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  constructor(private productService: ProductsService, private categoryService: CategorysService,private route: ActivatedRoute) {}
  productsList: productInterface[] = []
  categoryName: string | undefined; 

  ngOnInit(): void {
    this.route.paramMap.subscribe((response) => {
      this.categoryName = undefined;
      if (response.get("filterParams")) {
        this.productService.filterList(response.get("filterParams")).subscribe(
          (response) => {
            this.productsList = response;
          }
        );
      } else {
        this.loadList(response.get("category") || undefined)
      }
    })
  }

  loadList(id?: string) {
    if (id) {
      this.productService.getProductsByCategory(parseInt(id)).subscribe(
        (response) => {
          this.productsList = response;
          this.categoryService.getById(parseInt(id)).subscribe(
            (response) => {
              this.categoryName = response.name;
            }
          );
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

  resetFilter(): void {
    this.loadList();
  }
}