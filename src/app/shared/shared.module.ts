import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialImportsModule } from './app-material-imports/app-material-imports.module';
import { NamePipe } from './pipes/name.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    NamePipe
  ],
  imports: [
    AppMaterialImportsModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    NamePipe
  ]
})
export class SharedModule { }
