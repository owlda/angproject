import { Component } from '@angular/core';
import {Post} from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];
  OnPostCreated(list) {
    this.posts.push(list);
  }
}
