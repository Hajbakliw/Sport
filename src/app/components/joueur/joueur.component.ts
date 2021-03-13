import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css']
})
export class JoueurComponent implements OnInit {
joueur :any ;
  constructor() { }

  ngOnInit() {
    this.joueur =[
      {name:'Neymar', position:'Fc ', nbr:'10', age:'33', description:"best player 5 times",img:"assets/images/img_1.jpg" },
      {name:'Xavi', position:'RMD ', nbr:'7', age:'36', description:"best player 5 times" ,img:"assets/images/img_2.jpg"},
      {name:'Messi', position:'AT ', nbr:'10', age:'35', description:"best player 5 times",img:"assets/images/img_3.jpg" }
    ]
    
  }
    
  }


