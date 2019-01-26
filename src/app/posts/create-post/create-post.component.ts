import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../posts/posts.service/post.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/app.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  private mode = 'create';
  private postID: string;
  post: Post;
  constructor (public postService: PostService, public route: ActivatedRoute) {}
  public postInfo = new Subscription();
  info = '';
  observer() { return this.info; }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
         if (paramMap.has('postID')) {
           this.mode = 'edit';
           this.postID = paramMap.get('postID');
           this.post = this.postService.GetPost(this.postID);
         } else {
           this.mode = 'create';
           this.postID = null;
         }
    });
  }

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
