import { TitleStrategy } from '@angular/router';
import { AppService } from './app.service'; 
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
 
  personas:any
  constructor(
     public conect:AppService
  ){}

  ngOnInit():void{
  
 
        this.conect.getmas().subscribe((e)=>{
          this.personas= Object.values(e)

          
    })
    

  }


}
