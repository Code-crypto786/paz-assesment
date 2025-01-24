import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  @Input() carouselOptions: any;
  @Input() images!: any[];
}
