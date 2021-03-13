import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WorldCupComponent } from './components/world-cup/world-cup.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './components/blog/blog.component';
import { NextmatchComponent } from './components/nextmatch/nextmatch.component';
import { VideosComponent } from './components/videos/videos.component';
import { ResultComponent } from './components/result/result.component';
import { JoueurComponent } from './components/joueur/joueur.component';
import { MatchComponent } from './components/match/match.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { DisplayTeamComponent } from './components/display-team/display-team.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    WorldCupComponent,
    AdminComponent,
    PlayersComponent,
    MatchesComponent,
    AddPlayerComponent,
    AddMatchComponent,
    AddTeamComponent,
    TeamsComponent,
    BlogComponent,
    NextmatchComponent,
    VideosComponent,
    ResultComponent,
    JoueurComponent,
    MatchComponent,
    DisplayPlayerComponent,
    DisplayTeamComponent,
    DisplayMatchComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   //InMemoryWebApiModule.forRoot(DataService),
   HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
