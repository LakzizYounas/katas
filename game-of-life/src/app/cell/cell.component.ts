import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cell } from 'src/domain/aggregates/field';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
})
export class CellComponent {
  @Input() cell: Cell | undefined;
  @Output() dies = new EventEmitter();
  @Output() resurects = new EventEmitter();
}
