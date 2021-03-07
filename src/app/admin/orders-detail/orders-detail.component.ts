import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrls: ['./orders-detail.component.css'],
})
export class OrdersDetailComponent implements OnInit {
  details: any;

  constructor(private admin: AdminService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const orderId: any = this.route.snapshot.paramMap.get('orderId');
    this.details = this.admin.getOrderDetails(orderId);
  }
}
