import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  playerUrl='http://localhost:3000';
  // playerUrl='api/players';              //nom du table player dans data.service.ts
  constructor(private httpClient:HttpClient) { }
 
  addPlayer(player:any){
    return this.httpClient.post(`${this.playerUrl}/addPlayer`, player);
  }
  getAllPlayers(){
    return this.httpClient.get<{allPlayers:any}>(`${this.playerUrl}/getAllPlayers`);
  }
  getPlayerById(id){
    return this.httpClient.get(`${this.playerUrl}/getPlayerById/${id}`);
  }
  deletePlayer(id){
    return this.httpClient.delete<{message:string}>(`${this.playerUrl}/deletePlayer/${id}`);
  }
  editPlayer(player:any){
    return this.httpClient.put(`${this.playerUrl}/editPlayer/${player.id}`,player);
  }
}
