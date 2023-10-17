import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

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

  getCountries() {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_commons}/countries`, options);
  }

  getRegions(countryId: number) {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_commons}/regions/country/${countryId}`, options);
  }

  getCity(regionId: number) {
    const options = { headers: this.headers }    
    return this.http.get<any>(`${environment.url_commons}/cities/region/${regionId}`, options);
  }

}
