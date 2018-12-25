import { Component } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent {
  enteredValue = '';
  NewPost = 'Input your text here';
  AddPost() {
    this.NewPost = this.enteredValue;
  }

}
