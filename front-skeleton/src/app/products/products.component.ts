import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
  products: any[] = [];
  private carouselInterval!: number; // Use non-null assertion for the interval
  private productsSubscription!: Subscription; // Use non-null assertion for the subscription

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }

  ngAfterViewInit(): void {
    this.setupCarousel();
  }

  setupCarousel(): void {
    const slides = document.getElementsByClassName('carousel-item') as HTMLCollectionOf<HTMLElement>;
    let currentIndex = parseInt(localStorage.getItem('carouselIndex') || '0', 10);

    // Add 'active' class to the current index item if it exists
    if(slides && slides[currentIndex]) {
      slides[currentIndex].classList.add('active');
    }

    // Set up an interval to change slides
    this.carouselInterval = window.setInterval(() => {
      let activeFound = false;
      for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('active')) {
          slides[i].classList.remove('active');
          activeFound = true;
          let nextIndex = i + 1 === slides.length ? 0 : i + 1;
          slides[nextIndex].classList.add('active');
          localStorage.setItem('carouselIndex', nextIndex.toString()); // Save the current index
          break;
        }
      }
      if (!activeFound && slides.length > 0) {
        slides[0].classList.add('active');
        localStorage.setItem('carouselIndex', '0');
      }
    }, 1500);
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    // Unsubscribe from the observable when the component is destroyed
    this.productsSubscription.unsubscribe();
  }

  testClick(): void {
    console.log('Click detected');
  }

  // Add other methods as needed...
}
