import { Component, OnInit } from '@angular/core';
import { Product } from 'src/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    products: Product[] = [
      new Product(101, "Adidas Alphabouce Shoe", 3000, 4.5),
      new Product(201, "Samsunf LED TV", 30000, 5.0),
      new Product(301, "Cadbury 5 Star", 20, 4.5),
      new Product(401, "Apple iPhone 11", 53000, 4.8),
      new Product(501, "Samsung Fold", 73000, 4.3)
    ]

    showProducts = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
