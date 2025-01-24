import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ImageSliderComponent } from '../components/image-slider/image-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,ImageSliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  carouselOptions = {
    items: 3,            
    center: true,       
    loop: true,           
    margin: 10,          
    autoplay: true,      
    autoplayTimeout: 3000, 
    autoplaySpeed: 1000, 
    autoplayHoverPause: true, 
    dots: false,        
    nav: false,        
    navSpeed: 700,      
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
  
  images = [
    'assets/images/card-img-1.png',
    'assets/images/card-img-2.png',
    'assets/images/card-img-3.png',
    'assets/images/card-img-4.png'
  ];
}
