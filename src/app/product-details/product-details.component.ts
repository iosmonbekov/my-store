import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  disabled = false;
  addToCart(product: any) {
    this.CartService.addToCart(product);
    this.disabled = true;
  }

  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
    private productsServise: ProductsService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    // Find the product that correspond with the id provided in route.
    this.product = this.productsServise
      .getState()
      .find((product: any) => product.id === productIdFromRoute);
  }
}
