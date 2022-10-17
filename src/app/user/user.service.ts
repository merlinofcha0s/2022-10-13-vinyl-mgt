import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<HttpResponse<Array<User>>> {
    const headers = new HttpHeaders().set('Authorization', 'totototo');
    const params = new HttpParams()
      .set('chain', 'ethereum')
    return this.http.get<Array<User>>(`${environment.baseUrl}/users`, {headers, params, observe: "response"});
  }

  public getOne(id: number): Observable<HttpResponse<User>> {
    return this.http.get<User>(`${environment.baseUrl}/users/${id}`, {observe: "response"})
  }

}
