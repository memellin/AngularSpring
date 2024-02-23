import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Example } from '../model/example';
import { ExamplesService } from './../services/examples.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  examples$: Observable<Example[]>;

  displayedColumns = ['name', 'ppg'];

  // examplesService: ExamplesService;

  constructor(
    public dialog: MatDialog,
    private examplesService: ExamplesService
  ) {
    // this.examples = []; inicia no construtour
    // this.examplesService = new ExamplesService();
    this.examples$ = this.examplesService.list().pipe(
      catchError((error) => {
        this.onError("erro ao carregar jogadores")
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {}
}
