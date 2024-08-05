import { Component } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;

  constructor(public router:Router) {
    // Adding SearchbarComponent details
    const searchbar = new SearchbarComponent();
    const tooltip = new TooltipComponent();
    this.componentM.push(searchbar.component);
    this.componentM.push(tooltip.component);
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
    this.selectedComponent.hidden =!this.selectedComponent.hidden
    this.router.navigate([component.route])
    // let demoElement = document.getElementById("demos") as HTMLDivElement
    // for (let i = 0; i < this.componentM.length; i++) {
    //   const element = this.componentM[i];
     
    //   if(this.selectedComponent == element){
    //    demoElement.innerHTML = element.selectorKey //sor
    //   }
    // }
    // return this.selectedComponent
  }
  

 
}
