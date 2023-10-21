import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

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

  getCandidates(params?: any) {
    let queryParams = new HttpParams({ fromObject: params });
    const options = { headers: this.headers, params: queryParams }    
    return this.http.get<any>(`${environment.url_api}/users-app/candidate`, options);
  }
 
}
