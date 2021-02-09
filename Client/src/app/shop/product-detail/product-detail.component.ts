import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product!: IProduct;
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productDetails();
  }

  productDetails(){
    this.shopService.getProduct(+(this.activatedRoute.snapshot.paramMap.get('id') ?? '0')).subscribe(product => {
      this.product = product;
    }, error => {
      console.log(error);
    });
  }
}
