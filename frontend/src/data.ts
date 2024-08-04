import { ComponentModel } from "./app/shared/models/ComponentModel";

export const sample_components: ComponentModel[] = [
  {
    id: '0',
    name: 'Search Bar',
    icon: 'bi-search',
    animation: 'animate__animated animate__fadeIn',
    description: 'A search bar allows users to search for content.',
    code: `<input type="text" class="form-control" placeholder="Search...">`,
    hidden: false
  },
  {
    id: '1',
    name: 'Tooltip',
    icon: 'bi-info-circle',
    animation: 'animate__animated animate__fadeIn',
    description: 'A tooltip provides additional information on hover.',
    code: `<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip text">Hover me</button>`,
    hidden: false
  },
  {
    id: '2',
    name: 'Modal',
    icon: 'bi-window',
    animation: 'animate__animated animate__fadeIn',
    description: 'A modal displays content in a dialog overlay.',
    code: `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>`,
    hidden:false
  }
];
