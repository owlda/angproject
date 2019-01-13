import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../app.model';
import { PostService } from '../posts/posts.service/post.service';
import { Subscription } from 'rxjs';

@Component ({
  selector: 'app-list-component',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']

})
export class ListPostComponent implements OnInit, OnDestroy {
  listComponents: Post[] = [];
  private postSubsribtor: Subscription;

  constructor (public postService: PostService ) {}

  ngOnInit() {
       this.postService.GetPosts();
       this.postSubsribtor = this.postService.GetPostUpdateListener()
       .subscribe((posts: Post[]) => {
                  this.listComponents = posts;
       });
  }
  ngOnDestroy() {
    this.postSubsribtor.unsubscribe();
  }
  OnDelete(postID: string) {
    this.postService.DeletePost(postID);
  }
}
