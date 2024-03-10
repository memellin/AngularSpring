import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleComponent } from './containers/example/example.component';
import { ExampleFormComponent } from './containers/example-form/example-form.component';
import { ExampleResolver } from './guards/example.resolver';

const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
  },
  {
    path: 'new',
    component: ExampleFormComponent,
    resolve: { example: ExampleResolver}
  },
  {
    path: 'edit/:id',
    component: ExampleFormComponent,
    resolve: { example: ExampleResolver}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleRoutingModule {}
