import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: any = [];
  constructor(private http: HttpClient) {}

  getState() {
    return this.products;
  }

  getProducts(): Observable<any> {
    return this.http
      .get('https://my-store-9091b-default-rtdb.firebaseio.com/products.json')
      .pipe(
        tap((data: any) => {
          const products = Object.keys(data).map((el) => {
            return {
              ...data[el],
              id: el,
            };
          });
          this.products = products;
        })
      );
  }

  postProduct(product: any) {
    return this.http.post(
      'https://my-store-9091b-default-rtdb.firebaseio.com/products.json',
      product
    );
  }
}
