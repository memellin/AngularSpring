import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Example } from '../../model/example';
import { ExamplesService } from '../../services/examples.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  examples$: Observable<Example[]> | null = null;

  // examplesService: ExamplesService;

  constructor(
    public dialog: MatDialog,
    private examplesService: ExamplesService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    // this.examples = []; inicia no construtour
    // this.examplesService = new ExamplesService();
    this.refresh();
  }

  refresh() {
    this.examples$ = this.examplesService.list().pipe(
      catchError((error) => {
        this.onError('erro ao carregar jogadores');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    console.log('Adicionar jogador');
    this.router.navigate(['new'], { relativeTo: this.route }); // navega para a rota example/new quando clickado
  }

  onEdit(example: Example) {
    console.log('Editar jogador', example);
    this.router.navigate(['edit', example._id], { relativeTo: this.route });
  }

  onDelete(example: Example) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse example?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.examplesService.delete(example._id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
      }
    });
  }
}
