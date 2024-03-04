import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example/example.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleListComponent } from './example-list/example-list.component';

@NgModule({
  declarations: [ExampleComponent, ExampleFormComponent, ExampleListComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppMaterialImportsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ExampleModule {}
