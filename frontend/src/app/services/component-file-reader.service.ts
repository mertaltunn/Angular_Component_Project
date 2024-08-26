import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComponentFileReaderService {
  constructor(private http: HttpClient) {}

  readHtmlFile(componentName: string): Observable<string> {
    const filePath = `assets/components/${componentName}.component.html`;
    return this.http.get(filePath, { responseType: 'text' });
  }

  readTsFile(componentName: string): Observable<string> {
    const filePath = `assets/components/${componentName}.component.ts`;
    return this.http.get(filePath, { responseType: 'text' });
  }
}
