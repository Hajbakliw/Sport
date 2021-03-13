import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
 players: any ;
  constructor(
    private router:Router,
    private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe( //Asynchrome
      (data)=> {         //Arrow function: une fonction anonyme
        this.players = data.allPlayers ;
      }
    )
    //statique
    // this.players =[
    //   {id:1 , name:'Neymar', position:'Fc ', nbr:'10', age:'33', description:"Best player 1 times" },
    //   {id:2 , name:'Xavi', position:'rmd ', nbr:'7', age:'33', description:"Best player 1 times" },
    //   {id:3 , name:'Messi', position:'Fc ', nbr:'10', age:'33', description:"Best player 5 times" }
    // ];
  }
    goToPlayer(id) {
      this.router.navigate([`displayPlayer/${id}`]);
      alert('Hello'+id);
    }

    editPlayer(id) {
      this.router.navigate([`editplayer/${id}`]);
      alert('Hello'+id);
    }

    deletePlayer(id){
       this.playerService.deletePlayer(id).subscribe(
         (dataDelete)=>{
           console.log('Player deleted Successfully',dataDelete);
           this.playerService.getAllPlayers().subscribe( 
            (data)=> {         
              this.players = data.allPlayers ;
           
         }
        )

    }
  
    )
  }
  
  
}
