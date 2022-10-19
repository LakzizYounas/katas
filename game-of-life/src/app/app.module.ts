import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldModule } from './field/field.module';
import { CellComponent } from './cell/cell.component';

@NgModule({
  declarations: [AppComponent, CellComponent],
  imports: [BrowserModule, FieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
