import { Component } from '@angular/core';
import { GitListItemComponent } from "./git-list-item/git-list-item.component";

@Component({
  selector: 'gif-list',
  imports: [GitListItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent { }