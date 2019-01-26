import { Post } from '../../app.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
// class PostService here
export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  private postsObs = new Subject();
  // HTTP constructor initialized
  constructor(private http: HttpClient) {}
  // GET method to take the posts from express server
  GetPosts() {
    this.http.get<{id: string, message: string, posts: any}>('http://localhost:3000/posts')
    .pipe(map((postData) => {
      return postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        };
      });
    }))
    .subscribe((postSubscribed) => {
             // this.posts = parameter of subscribe
             this.posts = postSubscribed;
             this.postsUpdated.next([...this.posts]);
    });
  }
  // Method asObservable to take info then a post was been created (subscriber)
  GetPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  // Method asObservable to take info to show then a post was been created (subscriber) to angular form
  GetPostUpdateInfos() {
    return this.postsObs.asObservable();
  }
  // Methode to get post by id
  GetPost(id: string) {
    return {...this.posts.find(p => p.id === id) };
  }
  // ADD method to adding a posts to express server from angular
  AddPost(title: string, content: string) {
    const post: Post = {id: null, title: title, content: content};
    // adding a post to the express
    this.http.post<{message: string, postID: string}>('http://localhost:3000/posts', post).subscribe((reponseData) => {
      const id = reponseData.postID;
      post.id = id;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }
  // DELETE method to delete a post from express server
  DeletePost(postID: string) {
    this.http.delete('http://localhost:3000/posts/' + postID).subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postID);
      this.posts = updatedPosts;
      this.postsUpdated.next([...this.posts]);
    });
  }
}
