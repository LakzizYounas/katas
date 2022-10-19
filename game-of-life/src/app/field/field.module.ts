import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Field } from 'src/domain/models/field';
import { FieldSize } from 'src/domain/models/field-size';

import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  providers: [
    {
      provide: Field,
      useFactory: () => new Field(new FieldSize({ width: 3, height: 3 })),
    },
  ],
  imports: [CommonModule],
  exports: [FieldComponent],
})
export class FieldModule {}
