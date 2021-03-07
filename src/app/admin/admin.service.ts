import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  orders: any[] = [];
  constructor(private http: HttpClient) {}
  getState() {
    return this.orders;
  }
  getOrderDetails(value: string) {
    return this.orders.filter((el) => el.id === value)[0];
  }
  getOrders(): Observable<any> {
    return this.http
      .get('https://my-store-9091b-default-rtdb.firebaseio.com/orders.json')
      .pipe(
        tap((data: any) => {
          const orders = Object.keys(data).map((el) => {
            return {
              ...data[el],
              id: el,
            };
          });
          this.orders = orders;
        })
      );
  }
}
