import { Post } from '../models/post';
import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostsService]
})
export class PostComponent implements OnInit {


  @Input('post') post: Post;


  constructor() { }

  ngOnInit() {
  }

}
