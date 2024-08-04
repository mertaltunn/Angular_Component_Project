import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;

  constructor(private componentService: ComponentService) {
    // Adding SearchbarComponent details
    const searchbar = new SearchbarComponent();
    const tooltip = new TooltipComponent();
    this.componentM.push(searchbar.component);
    this.componentM.push(tooltip.component);
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
    this.selectedComponent.hidden =!this.selectedComponent.hidden
  }
  clickEvent(component: ComponentModel) {
    this.componentM[0].hidden = !this.componentM[0].hidden;
  }

 
}
