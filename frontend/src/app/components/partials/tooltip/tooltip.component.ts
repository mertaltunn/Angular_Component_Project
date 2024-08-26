import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentFileReaderService } from 'src/app/services/component-file-reader.service';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { sample_components } from 'src/data';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent implements OnInit {

  htmlCode: string = '';
  tsCode: string = '';
  componentName: string = '';
  
   component: ComponentModel = sample_components[1];

  constructor(private componentFileReader: ComponentFileReaderService,
    private route: ActivatedRoute){}
  ngOnInit(): void {}


  loadComponentFiles() {
    this.componentFileReader.readHtmlFile(this.componentName).subscribe(
      (code) => (this.htmlCode = code),
      (error) => console.error('Error loading HTML file:', error)
    );

    this.componentFileReader.readTsFile(this.componentName).subscribe(
      (code) => (this.tsCode = code),
      (error) => console.error('Error loading TypeScript file:', error)
    );
  } 
}

