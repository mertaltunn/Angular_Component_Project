import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentModel } from '../shared/models/ComponentModel';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  // public getComponentData(): Observable<ComponentModel>{
  //   return 
  // }
  private url = 'http://localhost:4200/';

  getPosts() {
    return this.http.get(this.url);
  }
  

}
