import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x:string]:any
  title = 'findme';
  meta_title_home = localStorage.getItem('meta_title_home') ;
  meta_keyword_home = localStorage.getItem('meta_keyword_home') ;
  meta_description_home = localStorage.getItem('meta_description_home') ;

}
