import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: any = {
    brand: '',
    category: '',
    name: '',
    image: '',
    price: 0,
  };

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.productService.postProduct(this.product).subscribe((data) => {
      alert('Product added Successfuly!!!');
      this.product = {
        brand: '',
        category: '',
        name: '',
        image: '',
        price: 0,
      };
    });
  }
}
