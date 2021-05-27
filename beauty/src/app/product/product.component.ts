import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,private productService: ProductService) { }
  title = "Ürün Listesi";
  filterText= "";
  products: Product[] = [];
  path = "http://localhost:3000/products"
  


  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>{
        this.products=data
      });
    })

  

  }

  addToCart(product:any){
    alert("Sepete Eklendi : " + product.name)
}
}
