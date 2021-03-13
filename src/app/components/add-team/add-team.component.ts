import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
 team: any={};
 teamForm:FormGroup ;
 constructor(
   private fb:FormBuilder,
   private TeamService:TeamService,
   private router:Router) { }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: [''],
      fondation :[''],
      stadium:[''],
      country:['']
    })
  }
  addTeam(){
    console.log('Here my Team',this.team) ;
    this.TeamService.addTeam(this.team).subscribe(
      () => {
        console.log('Team added succssefully');
        this.router.navigate(['admin']);
      }
    )
  }
}
