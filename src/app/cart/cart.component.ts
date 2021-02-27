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

  deleteProduct(id: number) {
    this.cartService.deleteProduct(id);
    this.totalPrice = this.cartService.getTotalCount();
  }

  clientName = '';
  inputName(value: string) {
    this.clientName = value;
  }
  clientAddress = '';
  inputAdress(value: string) {
    this.clientAddress = value;
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    alert('Your order has been submitted.');
    console.log('name: ', this.clientName, 'Adress: ', this.clientAddress);
  }

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
