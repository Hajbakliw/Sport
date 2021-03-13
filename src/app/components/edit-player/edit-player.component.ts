import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  id:any;
  player:  any={};
  playerform:FormGroup ;
 constructor(
   private fb:FormBuilder,
   private PlayerService:PlayerService,
   private router:Router,
   private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = this.PlayerService.getPlayerById(this.id).subscribe(
      (data) =>  {
        this.player=data ;
      }
    )
    this.playerform= this.fb.group({
      name: [''],
      position :[''],
      nbr:[''],
      age:[''],
      description:['']
    })
  }
  editPlayer(){
    console.log('Here is my player',this.player) ;
    this.PlayerService.editPlayer(this.player).subscribe(
      () => {
        console.log('Player edited succssefully');
        this.router.navigate(['admin']);
      }
    )
  }

}
