import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  isLoading = true;
  orders: any[] = [];
  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.admin.getOrders().subscribe((data) => {
      this.orders = this.admin.getState();
      console.log(this.admin.getState());
      this.isLoading = false;
    });
  }
}
