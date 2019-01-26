import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../app.model';
import { PostService } from '../posts/posts.service/post.service';
import { Subscription } from 'rxjs';
import { IconSvgComponent } from '../icon-svg/icon-svg.component';


@Component ({
  selector: 'app-list-component',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']

})
export class ListPostComponent implements OnInit, OnDestroy {
  private _posts: Post[] = [];
  public get posts(): Post[] {
    return this._posts;
  }
  public set posts(value: Post[]) {
    this._posts = value;
  }
  private postSubsribtor: Subscription;

  constructor (public postService: PostService ) {}


  ngOnInit() {
       this.postService.GetPosts();
       this.postSubsribtor = this.postService.GetPostUpdateListener()
       .subscribe((posts: Post[]) => {
                  this.posts = posts;
       });
  }
  ngOnDestroy() {
    this.postSubsribtor.unsubscribe();
  }
  OnDelete(postID: string) {
    this.postService.DeletePost(postID);
  }
}
