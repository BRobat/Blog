import { PostsService } from '../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent {

  posts$; //posts subscription can be done with async pipe
  posts: any[]
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {

    this.posts$ = db.list('/Posts')
    this.subscription = db.list('/Posts')
    .valueChanges()
    .subscribe(posts => {this.posts = posts})
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
