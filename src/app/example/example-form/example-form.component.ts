import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss']
})
export class ExampleFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: [null],
      ppg: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onCancel() {
    this.form.reset();
  }

}
