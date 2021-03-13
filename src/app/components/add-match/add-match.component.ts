import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  match: any={};
 matchForm:FormGroup ;
 constructor(
   private fb:FormBuilder,
   private MatchService:MatchService,
   private router:Router ) { }

  ngOnInit() {
    this.matchForm = this.fb.group({
      score1: [''],
      score2:[''],
      team1:[''],
      team2:[''],
      logo1:[''],
      logo2:['']
    })
  }
addMatch(){
  console.log('Here the team object',this.match) ;
  this.MatchService.addMatch(this.match).subscribe(
    ()=> {
      this.router.navigate[('admin')] ;
      console.log('Match added Succsseufly')
    }
  )
}
}