import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Injectable({
  providedIn: 'root'
})
export class ComponentApiService {
  private apiUrl = '/api/components';

  constructor(private http: HttpClient) {}

  // Method to save a component
  saveComponent(component: ComponentModel): Observable<any> {
    return this.http.post(this.apiUrl, component);
  }

  // Method to fetch components
  fetchComponents(): Observable<ComponentModel[]> {
    return this.http.get<ComponentModel[]>(this.apiUrl);
  }
}
