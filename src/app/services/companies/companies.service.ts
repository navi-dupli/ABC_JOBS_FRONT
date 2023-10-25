import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyModel } from '../../../app/models/companies';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

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

  registerCompany(body: CompanyModel) {
    const options = { headers: this.headers };
    return this.http.post<any>(`${environment.url_api}/companies`, body, options);
  }

}
