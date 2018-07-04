import { PostsService } from '../../services/posts.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  providers: [PostsService]
})
export class CanvasComponent {

  posts$;

  constructor(private postService: PostsService) {
    console.log("constructor canvas")
  }
  
  ngOnInit() {
    console.log("init canvas")
    this.getPosts()
  }

  getPosts() {
    console.log("get posts canvas")
    this.posts$ = this.postService.getPosts();
  }
}
