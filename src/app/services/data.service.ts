import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

  //  let  players =  [
  //   {id:1 , name:'Neymar', position:'Fc ', nbr:'10', age:'33', description:"Best player 1 times" },
  //     {id:2 , name:'Xavi', position:'rmd ', nbr:'7', age:'38', description:"Best player 1 times" },
  //     {id:3 , name:'Messi', position:'Fc ', nbr:'10', age:'33', description:"Best player 5 times" },
  //   ];
  //   let matches = [
  //     {id:1 , team1:'FCB', team2:'RMD', score1 : 2, score2 :3 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
  //     {id:2 , team1:'SEV', team2:'ATM', score1 : 4, score2 :3 , logo1:"assets/images/logo_3.png", logo2:"assets/images/logo_4.png"},
  //     {id:3 , team1:'DOR', team2:'RMD', score1 : 0, score2 :0 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
  //     {id:4 , team1:'CA', team2:'EST', score1 : 5, score2 :0 , logo1:"assets/images/logo_3.png", logo2:"assets/images/logo_4.png"},
  //   ];

  //  return {players,matches};
  return {};

  }
}
