import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {
  }

  getCandidate(id: number) {
    return this.http.get<any>(`${environment.url_api}/users-app/candidate/${id}`);
  }


}
