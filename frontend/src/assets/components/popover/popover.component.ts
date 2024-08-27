import { Component } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { sample_components } from 'src/data';

@Component({
  selector: 'app-pop-over',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css']
})
export class PopOverComponent {
  component:ComponentModel = sample_components[2];
}
