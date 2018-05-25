import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit, OnDestroy {

  

  posts = [
    {
      title: "Post 1",
      text: "Some text lalala ududu",
      img: "https://i.ytimg.com/vi/Vpc9W9AxDtc/maxresdefault.jpg",
      link: "https://www.youtube.com/watch?v=lt8x3bcuq7k"
    },
    {
      title: "Post 2",
      text: "Some text lalala ududu ua ua ua",
      img: "",
      link: "https://hackerthemes.com/bootstrap-cheatsheet/#input-group"
    },
   
  ]

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
