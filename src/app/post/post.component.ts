import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})
export class PostComponent implements OnInit {

posts = POSTS


  constructor() { }

  ngOnInit() {
  }

}
