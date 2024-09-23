import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialImportsModule } from '../shared/app-material-imports/app-material-imports.module';
import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './containers/example/example.component';
import { SharedModule } from '../shared/shared.module';
import { ExampleFormComponent } from './containers/example-form/example-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleListComponent } from './components/example-list/example-list.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ExampleComponent, ExampleFormComponent, ExampleListComponent, ProductListComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    AppMaterialImportsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ExampleModule {}
