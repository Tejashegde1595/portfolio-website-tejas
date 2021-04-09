import { Component, OnInit,Input } from '@angular/core';
import { projects } from 'src/interfaces/projects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() projects:projects[];
  
  constructor() {
    
   }

  ngOnInit() {
    console.log(this.projects);
  }

}
