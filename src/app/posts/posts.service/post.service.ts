import { Post } from '../../app.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
// class PostService here
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  // HTTP constructor initialized
  constructor(private http: HttpClient) {}
  // GET methode to take the posts from express server
  GetPosts() {
    this.http.get<{id: string, message: string, posts: Post[]}>('http://localhost:3000/posts')
    .subscribe((postData) => {
             this.posts = postData.posts;
             this.postsUpdated.next([...this.posts]);
    });
  }
  GetPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  AddPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
