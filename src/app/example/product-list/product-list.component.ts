import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/example';
import { ProductsService } from '../services/produtos-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  product$: Observable<Product[]> | null = null;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.product$ = this.productService.listProducts();
  }

}
