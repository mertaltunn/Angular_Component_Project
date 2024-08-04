import { Injectable } from '@angular/core';
import { ComponentModel } from '../shared/models/ComponentModel';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  private components: ComponentModel[] = [
    {
      id: 'searchbar',
      name: 'Search Bar',
      description: 'A search bar allows users to search for content.',
      code: '<input type="text" class="form-control" placeholder="Search...">',
      icon: 'bi-search',
      animation: 'animate__animated animate__fadeIn',
      hidden: false
    },
    {
      id: 'modal',
      name: 'Modal',
      description: 'A modal displays content in a layer above the main page.',
      code: '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>',
      icon: 'bi-window',
      animation: 'animate__animated animate__fadeIn',
      hidden: false
    },
    // Add more components as needed
  ];

  getAll(): ComponentModel[] {
    return this.components;
  }
}
