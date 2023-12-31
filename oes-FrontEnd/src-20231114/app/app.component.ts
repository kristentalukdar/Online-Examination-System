import { AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'OES';
  
  ngOnInit(){
    localStorage.clear();
  }

  ngOnDestroy(){
    localStorage.clear();
  }
}
