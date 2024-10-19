import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserResponse } from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  constructor(private httpClient: HttpClient) { }

  public gerarUsuario(): Observable<UserResponse> {
    return this.httpClient.get<UserResponse>(`https://randomuser.me/api`)
  }
}
