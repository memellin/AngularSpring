import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Example } from '../../model/example';

@Component({
  selector: 'app-example-list',
  templateUrl: './example-list.component.html',
  styleUrls: ['./example-list.component.scss']
})
export class ExampleListComponent implements OnInit {

  @Input() examples: Example[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() delete = new EventEmitter(false);
  readonly displayedColumns = ['name', 'ppg', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.add.emit(true);
    }

  onEdit(example: Example){
    this.edit.emit(example);
  }

  onDelete(example: Example){
    this.delete.emit(example);
  }
}
