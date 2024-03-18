import { Component } from '@angular/core';

@Component({
  selector: 'app-slide-banner',
  templateUrl: './slide-banner.component.html',
  styleUrl: './slide-banner.component.css',
})
export class SlideBannerComponent {
  autoSlideInterval: any = null;
  currentSlideIndex = 0;

  slides = [
    {
      imagePath: '../../../assets/slideBannerHomePage/slideBanner.png',
      name: 'Sale Banner',
    },
    {
      imagePath: '../../../assets/slideBannerHomePage/slideBanner2.png',
      name: 'Foreign Books',
    },
    {
      imagePath: '../../../assets/slideBannerHomePage/slideBanner3.png',
      name: 'Summer Sale Banner',
    },
    {
      imagePath: '../../../assets/slideBannerHomePage/slideBanner4.jpg',
      name: 'Sale Toys Banner',
    },
    {
      imagePath: '../../../assets/slideBannerHomePage/slideBanner5.jpg',
      name: 'Card Character Trading',
    },
  ];

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  nextSlide() {
    if (this.currentSlideIndex < this.slides.length) this.currentSlideIndex++;
    if (this.currentSlideIndex == this.slides.length) {
      this.currentSlideIndex = 0;
    }
  }
  autoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3500);
  }
  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }
}
