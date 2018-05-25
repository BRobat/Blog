import { POSTS } from './../mock-posts';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
  providers: [PostsService]
})
export class CanvasComponent implements OnInit {

  posts = POSTS

  

  

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    for(var i = 0; i<this.posts.length; i++) {
      var temporaryText = this.posts[i].text
      if(temporaryText.length>100){
        this.posts[i].text = temporaryText.slice(0,100)+"..."
      }
    }
  }

}
