import { Component, Input, OnInit } from '@angular/core';
import { Example } from '../model/example';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit {

  @Input() examples: Example[] = [];

  readonly displayedColumns = ['name', 'ppg', 'actions'];


  constructor(
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  }
  onAdd(){
    console.log('Adicionar jogador');
    this.router.navigate(['new'], {relativeTo: this.route}); // navega para a rota example/new quando clickado
  }
}
