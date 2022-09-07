import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent  {
 title = 'appNgContent';

    

posts = [

  {

    id: 1,

    title: 'Angular Http Post Request Example'

  },

  {

    id: 2,

    title: 'Angular 8 Routing and Nested Routing Tutorial With Example'

  },

  {

    id: 3,

    title: 'How to Create Custom Validators in Angular 8?'

  },

  {

    id: 4,

    title: 'How to Create New Component in Angular 8?'

  }

];

  

callFunction(event: any,post: any){

  console.log(post);

}

 

clickFunction() {

  alert("clicked me!");

}

}
