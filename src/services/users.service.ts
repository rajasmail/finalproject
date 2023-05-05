import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class usersService {
  SERVER_URL: string = "http://localhost:3477/";
  constructor(private httpClient: HttpClient) {

   }

  public getLoginUser(userData :any){
    return this.httpClient.get<any>(this.SERVER_URL +'users/'+ userData.Email + '/' + userData.Password);
  }

  public insertUser(userData: any) {
    return this.httpClient.post<any>(this.SERVER_URL + 'users/', userData);
  }
}
