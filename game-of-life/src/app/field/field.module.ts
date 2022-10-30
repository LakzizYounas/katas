import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldAggregate, FieldSize } from 'src/domain/aggregates/field';

import { FieldComponent } from './field.component';
import { CellComponent } from '../cell/cell.component';

@NgModule({
  declarations: [FieldComponent, CellComponent],
  providers: [
    {
      provide: FieldAggregate,
      useFactory: () =>
        new FieldAggregate(new FieldSize({ width: 3, height: 3 })),
    },
  ],
  imports: [CommonModule],
  exports: [FieldComponent],
})
export class FieldModule {}
