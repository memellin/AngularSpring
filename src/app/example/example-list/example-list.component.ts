import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Example } from '../model/example';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit {

  @Input() examples: Example[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'ppg', 'actions'];

  constructor(

  ) { }

  ngOnInit(): void {
  }
  onAdd(){
    this.add.emit(true);
    }

}
