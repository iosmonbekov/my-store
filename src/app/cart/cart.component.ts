import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getProductsInCart();

  totalPrice = this.cartService.getTotalCount();

  clientName = '';

  clientAddress = '';

  constructor(private cartService: CartService) {}

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
    this.totalPrice = this.cartService.getTotalCount();
  }
  onSubmit(): void {
    const order = {
      name: this.clientName,
      address: this.clientAddress,
      totalPrice: this.totalPrice,
      products: this.items,
    };
    this.cartService.postClientOrder(order).subscribe((data) => {});
    this.items = this.cartService.clearCart();
    alert('Your order has been submitted.');
  }

  ngOnInit(): void {}
}
