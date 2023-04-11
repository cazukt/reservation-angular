import { Component,OnInit } from '@angular/core';
import { ProductService } from '../shared/product.servie';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit{
  //products:any=new Array(4)
  //products:number[]=[1,2,3,4]
  products:any

  constructor(private productService:ProductService){ }

  ngOnInit(){
    // this.products=this.productService.getProducts()

    const productsObservable=this.productService.getProducts()

    productsObservable.subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('次のエラーが発生しました:' + err);
      }
    });

    // 以下、非推奨なので上記に書き換え
    // productsObservable.subscribe(
    //   (data)=>{
    //     this.products=data
    //   },
    //   (err)=>{console.error('次のエラーが発生しました:' + err)},
    //   ()=>{console.log('完了しました')}
    // )

    // const observable = new Observable((subscriber) => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.error('エラー発生');
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 2000);
    // });

    // console.log('subscribe前');
    
    // observable.subscribe({
    //   next(data) {
    //     console.log('次のデータが出力されました:' + data);
    //   },
    //   error(err) {
    //     console.error('次のエラーが発生しました:' + err);
    //   },
    //   complete() {
    //     console.log('完了しました');
    //   },
    // });
    // console.log('subscribeから抜けました');

  }

}
