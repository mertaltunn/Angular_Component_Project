import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import { ComponentApiService } from 'src/app/services/component-api.service'; // Import the service

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent implements AfterViewChecked {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;
  safeCode: SafeHtml | null = null;
  demoHtml: SafeHtml | null = null;
  hidden: boolean = false;

  bttonClickCode = false; // Initialize the button state here

  constructor(
    private componentApiService: ComponentApiService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    // Fetch components from the backend
    this.componentApiService.fetchComponents().subscribe((components: ComponentModel[]) => {
      this.componentM = components;
      console.log('sidebar components:', components);
    });
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
    this.hidden = !this.hidden;

    // Reset the code button state
    this.bttonClickCode = false;

    // Directly use the component's HTML for demo
    this.demoHtml = this.sanitizer.bypassSecurityTrustHtml(component.code);

    // Highlight the component's code for display as text
    this.safeCode = this.sanitizer.bypassSecurityTrustHtml(
      Prism.highlight(component.code, Prism.languages['markup'], 'markup')
    );

    this.cdr.detectChanges(); // Ensure the changes are detected immediately
  }

  ngAfterViewChecked() {
    if (this.selectedComponent) {
      Prism.highlightAll();
    }
  }

  buttonClickCode() {
    this.bttonClickCode = !this.bttonClickCode;
  }
}
