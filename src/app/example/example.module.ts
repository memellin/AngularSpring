import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example/example.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExampleComponent, ExampleFormComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppMaterialImportsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ExampleModule {}
