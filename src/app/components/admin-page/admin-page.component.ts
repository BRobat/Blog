import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit() {
  }

  submitPost(form: NgForm) {
    console.log(form.value)
    this.postService.addPost(form.value);

  }

}
