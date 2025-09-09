import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    }
  }
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] { // static because I don't want to create an instance
    return items.map(this.mapGiphyItemToGif);
  }
}