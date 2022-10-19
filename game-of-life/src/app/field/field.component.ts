import { Component } from '@angular/core';

import { Field } from 'src/domain/models/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  constructor(public readonly field: Field) {}
}
