import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ProductService } from '../shared/product.servie'

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: any

  constructor(private route: ActivatedRoute, private prodectService: ProductService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      // this.product=this.prodectService.getProductById(params.get('productId')!)
      const productObservable = this.prodectService.getProductById(params.get('productId')!)
      productObservable.subscribe({
        next: (data) => {
          this.product = data
        },
        error: (err) => {
          console.error('次のエラーが発生しました:' +err)
        },
      })
    })
  }
}
