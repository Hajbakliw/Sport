import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminComponent },
  {path:'add-player', component:AddPlayerComponent},
  {path:'add-team', component:AddTeamComponent},
  {path:'add-match', component:AddMatchComponent},
  {path: 'matches', component:MatchesComponent},
  {path:'joueur', component:JoueurComponent},
  {path:'displayPlayer/:id',component:DisplayPlayerComponent},//pour un path dynamique
  {path:'displayTeam/:id',component:DisplayTeamComponent},
  {path:'displayMatch/:id',component:DisplayMatchComponent},
  {path:'editplayer/:id',component:EditPlayerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
