import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];

  addToCart(product: any) {
    this.items.push(product);
  }

  getProductsInCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalCount() {
    let count = 0;
    if (this.items.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        count += +this.items[i].price;
      }
    }
    return count;
  }

  deleteProduct(id: number) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]._id === id) {
        this.items.splice(i, 1);
      }
    }
  }

  constructor(private http: HttpClient) {}

  postClientOrder(order: any) {
    return this.http.post(
      'https://my-store-9091b-default-rtdb.firebaseio.com/orders.json',
      order
    );
  }
}
