/* digit aservice to create the basic structure */
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { inject, Injectable, signal } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';

// The service in Angular works as a singleton (class has only one instance)
@Injectable({providedIn: 'root'})

export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal<boolean>(true);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey, //It must be written api_key because it is how it is expected for the endpoint
        limit: 20,
      }
    }).subscribe((resp) => { // For the get request to be triggered we need to subscribe
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    }); 
  }  
}