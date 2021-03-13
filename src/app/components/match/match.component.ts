import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {  
    // this.match = [
    //   {id:1 , team1:'FCB', team2:'RMD', score1 : 2, score2 :3 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
    //   {id:2 , team1:'SEV', team2:'ATM', score1 : 4, score2 :3 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
    //   {id:3 , team1:'DOR', team2:'RMD', score1 : 0, score2 :1 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
    //   {id:4 , team1:'CA', team2:'EST', score1 : 5, score2 :0 , logo1:"assets/images/logo_1.png", logo2:"assets/images/logo_2.png"},
    // ]
  
  matches:any;
  constructor(
    private router:Router,
    private matchService:MatchService) { }

   ngOnInit() {
     this.matchService.getAllMatches().subscribe(
       (data)=> {
         this.matches=data ;
       }
     )
    }

     goToMatch(id) {
      this.router.navigate([`displayMatch/${id}`]);
      alert('Hello'+id);
    }

    editMatch(id) {
      this.router.navigate([`editmatch/${id}`]);
      alert('Hello'+id);
    }

    deleteMatch(id){
       this.matchService.deleteMatch(id).subscribe(
         ()=>{
           console.log('Player deleted Successfully');
           this.matchService.getAllMatches().subscribe( 
            (data)=> {         
              this.matches = data ;
           
         }
        )

    }
  
    )
  }
  
}
