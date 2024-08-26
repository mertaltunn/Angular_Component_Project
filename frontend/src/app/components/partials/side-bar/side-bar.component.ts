import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import { ComponentApiService } from 'src/app/services/component-api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidebarComponent implements AfterViewChecked {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;
  safeHtmlCode: SafeHtml | null = null;
  safeTsCode: SafeHtml | null = null;
  demoHtml: SafeHtml | null = null;
  bttonClickCode = false;

  htmlContent: string | undefined;
  tsContent: string | undefined;

  constructor(
    private componentApiService: ComponentApiService,
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    public router: Router
  ) {
    this.componentApiService
      .fetchComponents()
      .subscribe((components: ComponentModel[]) => {
        this.componentM = components;
        console.log('sidebar components:', components);

      });
  }

  selectComponent(component: ComponentModel) {
    console.log('Navigating to route:', component.route);
    this.selectedComponent = component;
    this.bttonClickCode = false;
    this.router.navigate([component.route]);
    this.cdr.detectChanges();
    this.loadComponentFiles(component.name);
  }
 
  loadComponentFiles(componentName: string): void {
    // Load the HTML file
    this.http.get(`${componentName}.component.html`, { responseType: 'text' })
      .subscribe({
        next: (data) => {
          this.htmlContent = data;
        },
        error: (error) => {
          console.error('Error loading HTML file:', error);
        },
      });

    // Load the TypeScript file using dynamic import
    const tsFilePath = `src/app/components/partials/${componentName}.component.ts`;
    import(`src/app/components/partials/${componentName}.component.ts`)
      .then((module) => {
        // Here, `module` is the module exported from the TypeScript file.
        this.tsContent = module.default.toString();
      })
      .catch((error) => {
        console.error('Error loading TypeScript file:', error);
      });
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
