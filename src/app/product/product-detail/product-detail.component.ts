import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 product: Product = {};
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }

  getBookById(id: number) {
    this.productService.getProductById(id).subscribe(product => {
      this.product = product;
    });
  }
}
