import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.access_token}`
      }
    );
  }

  getAbilities() {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_api}/commons-app/skills`, options);
  }

  getLanguages() {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_api}/commons-app/languages`, options);
  }

  getEducationType() {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_api}/commons-app/education-types`, options);
  }

}
