import { Component, OnInit } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { sample_components } from 'src/data';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {
  component: ComponentModel = sample_components[1];


  ngOnInit(): void {}
}
