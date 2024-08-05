import { ComponentModel } from "./app/shared/models/ComponentModel";

export const sample_components: ComponentModel[] = [
  {
    id: '0',
    name: 'Search Bar',
    icon: 'bi-search',
    animation: 'animate__animated animate__fadeIn',
    description: 'A search bar allows users to search for content.',
    code: `<input type="text" class="form-control" placeholder="Search...">`,
    hidden: false,
    selectorKey: "<app-searchbar>",
    route:"search-bar"
  },
  {
    id: '1',
    name: 'Tooltip',
    icon: 'bi-info-circle',
    animation: 'animate__animated animate__fadeIn',
    description: 'A tooltip provides additional information on hover.',
    code: `
  <div class="container mt-3">
    <h2>Tooltip Component</h2>
    <button type="button" class="btn btn-outline-secondary me-2" placement="top" ngbTooltip="Tooltip on top">
        Tooltip on top
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="end" ngbTooltip="Tooltip on right">
        Tooltip on right
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="bottom" ngbTooltip="Tooltip on bottom">
        Tooltip on bottom
    </button>
    <button type="button" class="btn btn-outline-secondary me-2" placement="start" ngbTooltip="Tooltip on left">
        Tooltip on left
    </button>
  </div>`,
    hidden: false,
    selectorKey:"<app-tooltip>",
    route:"tooltip"
  },
  {
    id: '2',
    name: 'Modal',
    icon: 'bi-window',
    animation: 'animate__animated animate__fadeIn',
    description: 'A modal displays content in a dialog overlay.',
    code: `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Launch modal</button>`,
    hidden:false,
    selectorKey:"<app-modal>",
    route:"modal"
  }
];
