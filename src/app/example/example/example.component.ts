import { Component, OnInit } from '@angular/core';

import { Example } from '../model/example';
import { ExamplesService } from './../services/examples.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  examples: Example[] = [];

  displayedColumns = ['name','ppg'];

  examplesService: ExamplesService;


  constructor() {
    this.examplesService = new ExamplesService();
    this.examples = this.examplesService.list();
  }

  ngOnInit(): void {


  }

}
