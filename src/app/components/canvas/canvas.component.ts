import { PostsService } from '../../services/posts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent {

  posts;

  constructor(private postService: PostsService) {
    
  }
  

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
  }


}
