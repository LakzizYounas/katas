import { Component } from '@angular/core';

import { FieldAggregate } from 'src/domain/aggregates/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
})
export class FieldComponent {
  constructor(public readonly field: FieldAggregate) {}
}
