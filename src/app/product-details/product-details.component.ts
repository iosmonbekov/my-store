import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

export interface Product {
  _id: number;
  name: string;
  price: number;
  brand: string;
  image: string;
  category?: string;
}

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
    private CartService: CartService
  ) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => +product._id === productIdFromRoute
    );
  }
}
