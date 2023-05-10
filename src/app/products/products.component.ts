import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Product } from 'src/model/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
    isSubmitted = false;

    products = this.productService.getProducts();

    showProducts = true;

    categories = [
      {title: "Select Category", total: 1000},
      {title: "Home & Kitchen", total: 30},
      {title: "Furniture", total: 300},
      {title: "Clothing", total: 1230},
    ];

    productForm = new FormGroup(
      {
        pid: new FormControl(0),
        name: new FormControl(''),
        price: new FormControl(0),
        ratings: new FormControl(0.0),
        category: new FormControl(this.categories[0])
      }
    )

    
    constructor(private productService: ProductsService) { }
    
    ngOnInit(): void {
    }
    
    addProductToDB() {
      this.isSubmitted = true;
      // if (!this.productForm.valid) {
      //   return false;
      // } else {
        alert(JSON.stringify(this.productForm.value))
      // }
    }
}
