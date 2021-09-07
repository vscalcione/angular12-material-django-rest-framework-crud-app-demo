import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Tutorial } from '../models/tutorial.model';


@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(environment.baseUrl);
  }

  get(id: any): Observable<Tutorial>{
    return this.http.get(`${environment.baseUrl}/${id}`);
  }
  
  create(data: any): Observable<any> {
    return this.http.post(environment.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${environment.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(environment.baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${environment.baseUrl}?title=${title}`);
  }
}
