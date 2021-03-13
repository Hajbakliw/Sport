import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  userUrl='http://localhost:3000';
  constructor( private httpClient:HttpClient) { 
      //this.url=enviroment.defaultUrl;
    }
  login(user:any){
    return this.httpClient.post<{message:string,user:any}>(`${this.userUrl}/login`,user);
  }
  signup(user:any){
    return this.httpClient.post<{message:string}>(`${this.userUrl}/signup`,user)
  }
}

