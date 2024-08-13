import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  componentModel: ComponentModel = {
    id: '',
    name: '',
    icon: '',
    animation: '',
    description: '',
    code: '',
    hidden: false,
    route: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Call the API to save the component
    this.http.post('/api/components', this.componentModel).subscribe(response => {
      console.log('Component saved successfully', response);

      // Optionally, you can fetch the updated components list here to update the sidebar
      this.fetchComponents();
    });
  }

  fetchComponents() {
    // Example method to fetch components from the API and update the sidebar
    this.http.get<ComponentModel[]>('/api/components').subscribe(components => {
      // Update the sidebar with the new list of components
      console.log('Updated components:', components);
    });
  }
}
