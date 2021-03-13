import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any ;
  constructor(
    private router:Router,
    private teamService:TeamService
    ) { }

  ngOnInit() {
    this.teamService.getAllTeams().subscribe( //Asynchrome
      (data)=> {         //Arrow function: une fonction anonyme
        this.teams = data.allTeams ;
      }
    )
    // this.teams = [
    //   {id:1, name:'Rmd', fondation:'1899', stadium:'bernabiu', country:'spain'},
    //   {id:2, name:'Rmd', fondation:'1899', stadium:'bernabiu', country:'spain'},
    //   {id:3, name:'Rmd', fondation:'1899', stadium:'bernabiu', country:'spain'}
    // ]
  }
  goToTeam(id) {
    this.router.navigate([`displayTeam/${id}`]);
    alert('Hello'+id);}

  

}
