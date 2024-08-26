import { ComponentModel } from "./app/shared/models/ComponentModel";

export const data_components: ComponentModel[] = [

]

export const sample_components: ComponentModel[] = [
  {
    id: '0',
    name: 'Search Bar',
    description: 'A search bar allows users to search for content.',
    route:"search-bar"
  },
  {
    id: '1',
    name: 'Tooltip',
    description: 'A tooltip provides additional information on hover.',
    route:"tooltip"
  },
  {
    id: '2',
    name: 'Popover',
    description: 'A popover provides additional information on click.',
     route:"popover"
  }
];
