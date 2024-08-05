import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './components/partials/search-bar/search-bar.component';
import { TooltipComponent } from './components/partials/tooltip/tooltip.component';

const routes: Routes = [
  {path:"", component:SearchbarComponent, pathMatch: "full"},
  {path:"search-bar", component:SearchbarComponent, pathMatch: "full"},
  {path:"tooltip", component:TooltipComponent, pathMatch: "full"}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
