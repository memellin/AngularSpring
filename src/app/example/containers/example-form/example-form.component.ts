import { Example } from './../../model/example';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ExamplesService } from '../../services/examples.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss'],
})
export class ExampleFormComponent implements OnInit {
  form = this.formBuilder.group({
    _id: [''],
    name: [''],
    ppg: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ExamplesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {
    // this.form
  }

  ngOnInit(): void {
    const example: Example = this.route.snapshot.data['example'];
    this.form.setValue({
      _id: example._id,
      name: example.name,
      ppg: example.ppg,
    });
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => this.onSuccess(),
      error: () => {
        this.onError();
      },
    });
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Salvo com sucesso!', 'Close', { duration: 2000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error saving record', 'Close', { duration: 2000 });
  }
}
