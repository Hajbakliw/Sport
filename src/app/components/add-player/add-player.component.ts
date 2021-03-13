import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player:  any={};
  playerform:FormGroup ;
 constructor(
   private fb:FormBuilder,
   private PlayerService:PlayerService,
   private router:Router) { }

  ngOnInit() {
    this.playerform= this.fb.group({
      name: [''],
      position :[''],
      nbr:[''],
      age:[''],
      description:['']
    })
  }
  addPlayer(){
    console.log('Here my player',this.player) ;
    this.PlayerService.addPlayer(this.player).subscribe(
      () => {
        console.log('Player added succssefully');
        this.router.navigate(['admin']);
      }
    )
  }

}
