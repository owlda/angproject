import { Post } from '../../app.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  GetPosts() {
    return [...this.posts];
  }
  GetPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  AddPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}