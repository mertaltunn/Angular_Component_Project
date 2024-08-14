import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-typescript'; 
import { PopOverComponent } from '../popover/popover.component';
import { ComponentApiService } from 'src/app/services/component-api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent implements AfterViewChecked {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;
  safeCode: SafeHtml | null = null;
  hidden: boolean = false

  constructor(private componentApiService: ComponentApiService,public router: Router, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    // Adding SearchbarComponent details
    const searchbar = new SearchbarComponent();
    const tooltip = new TooltipComponent();
    const popover = new PopOverComponent();
    this.componentM.push(searchbar.component);
    this.componentM.push(tooltip.component);
    this.componentM.push(popover.component);

    this.componentApiService.fetchComponents().subscribe((components: ComponentModel[]) => {
      
      this.componentM = components;
      console.log('sidebar components:', components);
    });
  }

  decodeHTMLEntities(text: string) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
    this.hidden =!this.hidden;
    const decodedCode = this.decodeHTMLEntities(this.selectedComponent.code);
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(
      Prism.highlight(decodedCode, Prism.languages['javascript'], 'javascript')
    );
    this.router.navigate([component.route]);
    this.cdr.detectChanges(); // Ensure the changes are detected immediately
    this.bttonClickCode = false;
    // this.bttonClickDemo =false;
  }

  ngAfterViewChecked() {
    if (this.selectedComponent) {
      Prism.highlightAll();
    }
  }
  bttonClickCode = false;
  // bttonClickDemo = false;
  buttonClickCode(){
    this.bttonClickCode = !this.bttonClickCode
  }
  // buttonClickDemo(){
  //   this.bttonClickDemo = !this.bttonClickDemo
  // }
}
