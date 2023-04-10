import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';
import { ProductService } from '../shared/product.servie';

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product:any

  constructor(
    private route:ActivatedRoute,
    private prodectService:ProductService
    ){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params =>{
      // this.product=products[+params.get('productId')!]
      this.product=this.prodectService.getProductById(+params.get('productId')!)
    })
    
  }

}
