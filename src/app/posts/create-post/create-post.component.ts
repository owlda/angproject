import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../app.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent {
  @Output() eventPostCreated = new EventEmitter<Post>();
  AddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const list: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.eventPostCreated.emit(list);
  }

}
