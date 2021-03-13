import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl='http://localhost:3000';
  // playerUrl='api/players';              //nom du table player dans data.service.ts
  constructor(private httpClient:HttpClient) { }
 
  addTeam(team:any){
    return this.httpClient.post(`${this.teamUrl}/addTeam`, team);
  }
  getAllTeams(){
    return this.httpClient.get<{allTeams:any}>(`${this.teamUrl}/getAllTeams`);
  }
  getTeamById(id){
    return this.httpClient.get(`${this.teamUrl}/getTeamById/${id}`);
  }
  deleteTeam(id){
    return this.httpClient.delete(`${this.teamUrl}/deleteTeam/${id}`);
  }
  editTeam(team:any){
    return this.httpClient.put(`${this.teamUrl}/editTeam/${team.id}`,team);
  }
}
