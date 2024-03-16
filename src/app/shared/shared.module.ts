
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialImportsModule } from './app-material-imports/app-material-imports.module';
import { NamePipe } from './pipes/name.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    NamePipe,
    ConfirmationDialogComponent
  ],
  imports: [
    AppMaterialImportsModule,
    CommonModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmationDialogComponent,
    NamePipe

  ]
})
export class SharedModule { }
