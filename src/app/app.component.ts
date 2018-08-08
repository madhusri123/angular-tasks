import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scenario1';
 private values="";


 
  onKey(value: string) {
    this.values += value;
   // console.log(this.values);
  }
  
 
//  OnClickMe(text) {
//      console.log(text);
//    }

  
  
}
