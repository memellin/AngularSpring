import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product, Category } from "../model/example";
import { delay, first, tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})

export class ProductsService {
  private readonly API = "/products";
  constructor(private httpClient: HttpClient) {}

  listProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API).pipe(
      first(),
      delay(200),
      tap((products) => console.log(products))
    );
  }

}
