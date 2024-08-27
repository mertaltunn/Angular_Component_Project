import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from '../assets/components/search-bar/search-bar.component';
import { TooltipComponent } from './components/partials/tooltip/tooltip.component';
import { PopOverComponent } from './components/partials/popover/popover.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarComponent } from './components/partials/side-bar/side-bar.component';
import { ModalComponent } from './components/partials/modal/modal.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'side-bar', component:SidebarComponent, pathMatch: "full"},
  {path:"search-bar", component:SearchbarComponent, pathMatch: "full"},
  {path:"tooltip", component:TooltipComponent, pathMatch: "full"}, 
  {path:"popover", component:PopOverComponent, pathMatch: "full"},
  {path:"modal", component:ModalComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
