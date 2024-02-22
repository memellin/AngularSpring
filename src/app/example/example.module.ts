import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    ExampleComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppMaterialImportsModule
  ]
})
export class ExampleModule { }
