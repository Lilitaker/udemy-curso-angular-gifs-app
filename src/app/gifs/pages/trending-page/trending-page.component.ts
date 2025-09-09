import { Component, /* computed, */ inject } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifService } from '../../services/gifs.service';

/* const imageUrls: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
]; */

@Component({
  selector: 'trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
})

export default class TrendingPageComponent { 
  // gifs = imageUrls; // This is just a variable, not a signal, so in the html file must go [gifs]="gifs"
  // gifs = signal(imageUrls); --> This is a signal, so in the html file must go [gifs]="gifs()"
  // gifs = computed(() => this.gifService.trendingGifs()); // Other option to use the service in the component
  gifService = inject( GifService ); // Angular verifies if there is an GifService instance, if so it will inject it as it comes, on the contrary it will create the instance for me 

}