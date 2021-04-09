import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toTopProjects(){
    document.getElementById("projects").scrollIntoView();
  }

  toTopContacts(){
    document.getElementById("contacts").scrollIntoView();
  }

  toTopAbout(){
    document.getElementById("about").scrollIntoView();
  }
}
