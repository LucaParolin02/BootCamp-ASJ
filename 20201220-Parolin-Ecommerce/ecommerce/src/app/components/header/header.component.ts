import { Component, OnInit } from '@angular/core';
import { CategorysService } from '../../services/categorys.service';
import { categoryInterface } from '../../interfaces/categoryInterface';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  constructor(private service: CategorysService, private productService: ProductsService, private route: Router){}

  listCategory: categoryInterface[] = [];

  ngOnInit(): void {
   
    this.service.getAll().subscribe((res=> {
      this.listCategory = res;
    }))
  }

  getCounter() {
    return this.productService.cartCounter;
  }

  public checkActive(id: number): boolean {
    return this.route.url.endsWith("category/" + id)
  }
}
