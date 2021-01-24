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
  }, {
    image: '/assets/images/6.jpg',
    thumbImage: '/assets/images/6.jpg',
    title: ''
  }];
  ngOnInit() {
    window.onscroll = function () { myFunction() };

    // Get the header
    var header = document.getElementById("myHeader");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }
}
