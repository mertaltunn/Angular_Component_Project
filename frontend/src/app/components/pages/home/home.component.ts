import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComponentApiService } from 'src/app/services/component-api.service';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  componentModel: ComponentModel = {
    id: '1',
    name: 'asd',
    route:'weqwe',
    icon: 'asd',
    animation: 'asdasdasd',
    description: '',
    code: '',
  };

  constructor(private componentApiService: ComponentApiService) {
    let componentObservable: Observable<ComponentModel[]>;

    // componentObservable = componentApiService.fetchComponents()
    // componentObservable.subscribe((serverComponents)=>{
    //   this.components = serverComponents
    //   console.log("Serverdan component çekme başarili")
    // })
  }

  components: ComponentModel[] = [];
  onSubmit() {
    // Call the service to save the component
    this.componentApiService
      .saveComponent(this.componentModel)
      .subscribe(
        (response) => {
        console.log('Component saved successfully', response);

        // Fetch the updated components list
        this.fetchComponents();
      }
    );
  }

  fetchComponents() {
    // Call the service to fetch components
    this.componentApiService.fetchComponents().subscribe((components: ComponentModel[]) => {
      
      this.components = components;
      console.log('Updated components:', components);
    });
  }
}
