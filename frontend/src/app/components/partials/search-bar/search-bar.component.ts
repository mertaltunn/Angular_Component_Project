import { Component, OnInit } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { sample_components } from 'src/data';

@Component({
  selector: 'app-searchbar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchbarComponent implements OnInit {
   component: ComponentModel = sample_components[0];
  
  
  ngOnInit(): void {}
}

 