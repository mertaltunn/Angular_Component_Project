import { Component } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { sample_components } from '../../src/data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  componentM: ComponentModel[] = sample_components;
  selectedComponent: ComponentModel | null = null;
  title = 'frontend';
  /**
   *
   */
  constructor(public router:Router) {
    // const searchbar = new SearchbarComponent();
    // const tooltip = new TooltipComponent();
    // this.componentM.push(searchbar.component);
    // this.componentM.push(tooltip.component);
  }

  // selectComponent(component: ComponentModel) {

  //   console.log("component: ", component);
  //   this.router.navigate([component.route])
  // }

}
