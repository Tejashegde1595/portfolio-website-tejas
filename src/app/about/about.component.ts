import { Component, OnInit } from '@angular/core';
import { projects } from 'src/interfaces/projects';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  projects:projects[];
  fileUrl
  constructor(private sanitizer: DomSanitizer) {
    this.populateProjects();
    console.log('projects are'+this.projects);
   }

  ngOnInit() {
    this.populateProjects();
  }

  populateProjects(){
    this.projects = [{
      name:'Learn In',
      languages:'Java',
      link:'https://github.com/Tejashegde1595/LearnIn',
      description:'Spring Boot Restful Api to create a clone of Linked In',
      image:'../../assets/learnIn.jfif'
    },{
      name:'Legends',
      languages:'Angular',
      link:'https://github.com/Tejashegde1595/LegendsServer',
      description:'Angular application to display football Player Details with backend as node.',
      image:'../../assets/football.jpg'
    },
    {
      name:'Ecommerce App',
      languages:'TypeScript',
      link:'https://github.com/Tejashegde1595/Oshop-angular',
      description:'Angular app to mimic an Ecommerce App',
      image:'../../assets/ecommerce.jpg'
    },
    {
      name:'Quora',
      languages:'Java',
      link:'https://github.com/Tejashegde1595/quora',
      description:'Spring Boot RestFul Api working as a clone of Quora App',
      image:'../../assets/quora.jpg'
    },{
      name:'imageHoster',
      languages:'Java',
      link:'https://github.com/Tejashegde1595/imageHoster',
      description:'Spring Monolithic App for Image Uploading and Interaction',
      image:'../../assets/imageHoster.png'
    },
    {
      name:'spellChecker',
      languages:'Java',
      link:'https://github.com/Tejashegde1595/SpellChecker',
      description:'Spell Checker using Edit Distance Algorithm',
      image:'../../assets/spell.png'
    }
    ]
  }

}
