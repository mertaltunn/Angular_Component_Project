import { Injectable, Compiler, Injector, NgModule, Component, ViewContainerRef } from '@angular/core';
import { dynamicComponentModel } from '../shared/models/dynamicComponentModel';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  constructor(private compiler: Compiler, private injector: Injector) {}

  async createComponent(componentModel: dynamicComponentModel, viewContainerRef: ViewContainerRef) {
    const component = Component({ 
      template: componentModel.html, 
      styles: [componentModel.css] 
    })(class {}); 

    const module = NgModule({ declarations: [component] })(class {});

    const moduleFactory = await this.compiler.compileModuleAsync(module);
    const moduleRef = moduleFactory.create(this.injector);
    const factory = moduleRef.componentFactoryResolver.resolveComponentFactory(component);
    viewContainerRef.clear();
    viewContainerRef.createComponent(factory);
  }
}
