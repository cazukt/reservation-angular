import { Component,OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit{
  //products:any=new Array(4)
  //products:number[]=[1,2,3,4]
  products:any

  constructor(){ }

  ngOnInit(){
    this.products=products
  }

}
