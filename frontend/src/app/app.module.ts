import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/partials/side-bar/side-bar.component';
import { SearchbarComponent } from './components/partials/search-bar/search-bar.component';
import { TooltipComponent } from './components/partials/tooltip/tooltip.component';
import { PopOverComponent } from './components/partials/popover/popover.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';




  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      SidebarComponent,
      SearchbarComponent,
      TooltipComponent,
      PopOverComponent,
      
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
