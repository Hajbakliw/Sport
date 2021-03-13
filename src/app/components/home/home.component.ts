import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
matchObj : any ;
joueurObj :any ;
  constructor() { }

  ngOnInit() {
    this.matchObj =  {id:1 , team1:'FCB', team2:'RMD', score1 : 2, score2 :3 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"}
    this.joueurObj =  {name:'Neymar', position:'Fc ', nbr:'10', age:'33', description:"best player 5 times",img:"assets/images/img_1.jpg" }
    
  
  }

}
