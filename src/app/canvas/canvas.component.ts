import { POSTS } from './../mock-posts';
import { PostsService } from './../posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  

  posts: any[]
  subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.subscription = db.list('/Posts')
    .valueChanges()
    .subscribe(posts => {
      this.posts = posts
    })
    

  }

  ngOnInit(): void {

    // string cutter

 

    /*
    for(var i = 0; i<this.posts.length; i++) {
      var temporaryText = this.posts[i].text

      if(temporaryText.length>100){
        this.posts[i].highlight = this.posts[i].text.slice(0,100)+"..."
      } else {
        this.posts[i].highlight = this.posts[i].text
      }
    }
    */
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
    
  }

}
