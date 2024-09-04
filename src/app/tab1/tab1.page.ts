import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import formFields from '../../my-form.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  myForm: FormGroup;
  fields: [] | any;
  array = [];
  jsonData: any;

  constructor(private formBuilder: FormBuilder) {
    this.fields = formFields.fields;
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({});
    this.fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      this.myForm.addControl(
        field.label,
        this.formBuilder.control('', validators)
      );
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form submitted successfully:', this.myForm.value);
      this.array.push(this.myForm.value);
      this.jsonData = JSON.stringify(this.myForm.value);
      console.log(this.array);
      console.log(this.jsonData);
    } else {
      console.log('Please fill in all required fields.');
    }
  }
}
