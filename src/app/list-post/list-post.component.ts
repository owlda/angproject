import { Component, Input } from '@angular/core';
import {Post} from '../app.model';

@Component ({
  selector: 'app-list-component',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']

})
export class ListPostComponent {
  @Input() listComponents: Post[] = [];
}
