import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Example } from '../../model/example';
import { ExamplesService } from '../../services/examples.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {

  examples$: Observable<Example[]>;


  // examplesService: ExamplesService;

  constructor(
    public dialog: MatDialog,
    private examplesService: ExamplesService,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd(){
    console.log('Adicionar jogador');
    this.router.navigate(['new'], {relativeTo: this.route}); // navega para a rota example/new quando clickado
  }

  onEdit(example: Example){
    console.log('Editar jogador', example);
    this.router.navigate(['edit', example._id], {relativeTo: this.route});
  }
}
