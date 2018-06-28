import { Post } from './../post';
import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../posts.service';

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
