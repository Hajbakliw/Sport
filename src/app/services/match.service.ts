import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl='http://localhost:3000'
  //matchUrl='api/matches'; 
  constructor(private httpClient:HttpClient) { }

  addMatch(match:any){
    return this.httpClient.post(`${this.matchUrl}/addMatch`, match);
  }
  getAllMatches(){
    return this.httpClient.get<{allMatches:any}>(`${this.matchUrl}/getAllMatches`);
  }
  getMatchById(id){
    return this.httpClient.get(`${this.matchUrl}/getMatchById/${id}`);
  }
  deleteMatch(id){
    return this.httpClient.delete(`${this.matchUrl}/deleteMatch/${id}`);
  }
  editPlayer(match:any){
    return this.httpClient.put(`${this.matchUrl}/editMatch/${match.id}`,match);
  }
}
