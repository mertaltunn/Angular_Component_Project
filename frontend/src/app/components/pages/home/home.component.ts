import { Component } from '@angular/core';
import { ComponentApiService } from 'src/app/services/component-api.service';
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

  constructor(private componentApiService: ComponentApiService) {}

  onSubmit() {
    // Call the service to save the component
    this.componentApiService.saveComponent(this.componentModel).subscribe(response => {
      console.log('Component saved successfully', response);

      // Fetch the updated components list
      this.fetchComponents();
    });
  }

  fetchComponents() {
    // Call the service to fetch components
    this.componentApiService.fetchComponents().subscribe(components => {
      console.log('Updated components:', components);
    });
  }
}
