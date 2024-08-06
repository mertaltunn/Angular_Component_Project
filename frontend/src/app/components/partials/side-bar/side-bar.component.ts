import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { SearchbarComponent } from '../search-bar/search-bar.component';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-typescript'; 

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent implements AfterViewChecked {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;
  safeCode: SafeHtml | null = null;

  constructor(public router: Router, private sanitizer: DomSanitizer, private cdr: ChangeDetectorRef) {
    // Adding SearchbarComponent details
    const searchbar = new SearchbarComponent();
    const tooltip = new TooltipComponent();
    this.componentM.push(searchbar.component);
    this.componentM.push(tooltip.component);
  }

  decodeHTMLEntities(text: string) {
    const txt = document.createElement('textarea');
    txt.innerHTML = text;
    return txt.value;
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
    this.selectedComponent.hidden = !this.selectedComponent.hidden;
    const decodedCode = this.decodeHTMLEntities(this.selectedComponent.code);
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(
      Prism.highlight(decodedCode, Prism.languages['javascript'], 'javascript')
    );
    this.router.navigate([component.route]);
    this.cdr.detectChanges(); // Ensure the changes are detected immediately
    this.bttonClickCode = false;
    this.bttonClickDemo =false;
  }

  ngAfterViewChecked() {
    if (this.selectedComponent) {
      Prism.highlightAll();
    }
  }
  bttonClickCode = false;
  bttonClickDemo = false;
  buttonClickCode(){
    this.bttonClickCode = !this.bttonClickCode
  }
  buttonClickDemo(){
    this.bttonClickDemo = !this.bttonClickDemo
  }
}
