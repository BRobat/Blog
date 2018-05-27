import { POSTS } from './../mock-posts';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [PostsService]
})
export class CanvasComponent implements OnInit {
  

  posts: any[]

  constructor(db: AngularFireDatabase) {
    db.list('/Posts')
    .valueChanges()
    .subscribe(posts => {
      this.posts = posts
      console.log(this.posts)
    })
    

  }

  ngOnInit(): void {

    // string cutter
    for(var i = 0; i<this.posts.length; i++) {
      var temporaryText = this.posts[i].text
      if(temporaryText.length>100){
        this.posts[i].highlight = temporaryText.slice(0,100)+"..."
      }
    }
  }

}
