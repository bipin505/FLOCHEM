import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
el:HTMLElement;
  constructor() { }

  ngOnInit(): void {
  }
  scroll(id){
    this.el = document.getElementById(id);
    this.el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

  }
}
