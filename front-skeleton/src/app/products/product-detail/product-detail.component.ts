import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // The '+' converts the ID to a number
      this.productService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  // Corrected: changeQuantity is now a method of the component class
  changeQuantity(change: number): void {
    const quantityInput = document.getElementById('quantityNum') as HTMLInputElement; // Corrected: Added type assertion
    if (quantityInput) { // Checks if quantityInput is not null
      let currentQuantity = parseInt(quantityInput.value);
      let newQuantity = currentQuantity + change;

      if (newQuantity < 1) newQuantity = 1;
      if (newQuantity > 99) newQuantity = 99;

      quantityInput.value = newQuantity.toString(); // Corrected: Set the value as string
    }
  }

  addToCart(product: any): void {
    // Implement logic to add the product to the cart
  }

  buyNow(product: any): void {
    // Implement logic to immediately purchase the product
  }
}
