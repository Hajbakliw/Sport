import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  match:any ;
  constructor(){}
  ngOnInit(){
    this.match = [
      {id:1 , team1:'FCB', team2:'RMD', score1 : 2, score2 :3 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
      {id:2 , team1:'SEV', team2:'ATM', score1 : 4, score2 :3 , logo1:"assets/images/logo_3.png", logo2:"assets/images/logo_4.png"},
      {id:3 , team1:'DOR', team2:'RMD', score1 : 0, score2 :0 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
      {id:4 , team1:'CA', team2:'EST', score1 : 5, score2 :0 , logo1:"assets/images/logo_3.png", logo2:"assets/images/logo_4.png"},
    ]
  }
  //     var match = await axios("http://livescore-api.com/api-client/scores/events.json?key=demo_key&secret=demo_secret&id=129180", {
  //   "method": "GET",
  //   "headers": {
  //     "Access-Control-Allow-Origin": "*"
  //   }
  // })
  // .then(response => {
  //   console.log(response);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
  // }
 

}

