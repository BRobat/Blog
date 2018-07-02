import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsRef: AngularFireList<Post>;
  posts: Observable<Post[]>;

  constructor(db: AngularFireDatabase) {
    this.postsRef = db.list('/Posts');
    this.posts = this.postsRef.snapshotChanges().pipe(
      map(changes => changes.map(c => 
        ({ key: c.payload.key, ...c.payload.val() })
      ),));
  }

  getPosts() {
    console.log("hey: ",this.posts)
    return (this.posts)
  }


  
}
