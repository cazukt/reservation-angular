import { Injectable } from "@angular/core";
import { products } from "src/app/products";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService{

  constructor(private http: HttpClient) { }

  getProducts(){
    return products
  }

  getProductById(productId:number){
    return products[productId]
  }

}