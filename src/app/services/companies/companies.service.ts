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
    this.headers = new HttpHeaders({'Content-Type': 'application/json'});
  }

  registerCompany(body: CompanyModel) {
    const headers = this.headers;
    return this.http.post<any>(environment.url_companies, body, { headers });
  }

}
