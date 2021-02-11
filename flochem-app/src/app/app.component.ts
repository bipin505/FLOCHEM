import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'flochem-app-new';
  imageObject = [{
    image: '/assets/images/1.jpg',
    thumbImage: '/assets/images/1.jpg',
    title: ''
  }, {
    image: '/assets/images/2.jpg',
    thumbImage: '/assets/images/2.jpg'
  }, {
    image: '/assets/images/3.jpg',
    thumbImage: '/assets/images/3.jpg',
    title: ''
  }, {
    image: '/assets/images/4.jpg',
    thumbImage: '/assets/images/4.jpg',
    title: ''
  }, {
    image: '/assets/images/5.jpg',
    thumbImage: '/assets/images/5.jpg',
    title: ''
  }];
  ngOnInit() {
  }   
}
