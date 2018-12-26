import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostService} from '../../posts/posts.service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent {
  constructor (public postService: PostService ) {}
  AddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.AddPost(form.value.title, form.value.content);
  }
}
