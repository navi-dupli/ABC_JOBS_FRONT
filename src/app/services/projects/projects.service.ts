import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ProjectModel} from "../../models/projects";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${currentUser.access_token}`
    });
  }

  registerProject(body: ProjectModel) {
    const options = { headers: this.headers };
    return this.http.post<any>(`${environment.url_api}/projects-app/projects`, body, options);
  }

}
