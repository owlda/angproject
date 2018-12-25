import { Component } from '@angular/core';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html'
})

export class CreatePostComponent {
  enteredValue = '';
  NewPost = 'Input your text here';
  AddPost() {
    this.NewPost = this.enteredValue;
  }

}
