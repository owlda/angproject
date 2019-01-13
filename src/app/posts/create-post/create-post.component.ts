import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import {PostService} from '../../posts/posts.service/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent {
  constructor (public postService: PostService ) {}
  public postInfo = new Subscription();
  info = '';
  observer() { return this.info; }

  AddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.AddPost(form.value.title, form.value.content);
    this.info = 'new post added now';
    this.postInfo = this.postService.GetPostUpdateInfos().subscribe((this.observer));
    form.resetForm();
  }
}
