const Product=require('./model/product')

class FakeDb{
  constructor(){
    this.products=[
      {
        coverImage:"./assets/img/phone-cover.jpg",
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        hedding1:'サンプルテキスト1',
        hedding2:'サンプルテキスト2',
        hedding3:'サンプルテキスト3',
        heddingtext1:'ヘッディングサンプルテキスト1',
        heddingtext2:'ヘッディングサンプルテキスト2',
        heddingtext3:'ヘッディングサンプルテキスト3'
      },
      {
        coverImage:"data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        hedding1:'サンプルテキスト11',
        hedding2:'サンプルテキスト22',
        hedding3:'サンプルテキスト33',
        heddingtext1:'ヘッディングサンプルテキスト11',
        heddingtext2:'ヘッディングサンプルテキスト22',
        heddingtext3:'ヘッディングサンプルテキスト33'
      },
      {
        coverImage:"./assets/img/phone-cover.jpg",
        name: 'Phone Standard',
        price: 299,
        description: '',
        hedding1:'サンプルテキスト111',
        hedding2:'サンプルテキスト222',
        hedding3:'サンプルテキスト333',
        heddingtext1:'ヘッディングサンプルテキスト111',
        heddingtext2:'ヘッディングサンプルテキスト222',
        heddingtext3:'ヘッディングサンプルテキスト333'
      },
      {
        coverImage:"./assets/img/phone-cover.jpg",
        name: 'Phone Special',
        price: 999,
        description: '',
        hedding1:'サンプルテキスト1111',
        hedding2:'サンプルテキスト2222',
        hedding3:'サンプルテキスト3333',
        heddingtext1:'ヘッディングサンプルテキスト1111',
        heddingtext2:'ヘッディングサンプルテキスト2222',
        heddingtext3:'ヘッディングサンプルテキスト3333'
      }
    
    ]
  }
  pushProductsToDb(){
    this.products.forEach(
      (product)=>{
        const newProduct=new Product(product)
        newProduct.save()
      }
    )

  }
  seeDb(){
    this.pushProductsToDb()
  }
}

module.exports=FakeDb