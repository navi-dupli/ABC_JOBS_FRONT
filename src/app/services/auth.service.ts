import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  login(username: string, password: string) {
    const headers = this.headers;
    const body = {
    grant_type: environment.grant_type,
    username,
    password,
    audience: environment.audience, 
    client_id: environment.client_id,
    client_secret: environment.client_secret
    };
    return this.http.post<any>(environment.url_login, body, { headers });
  }


}
