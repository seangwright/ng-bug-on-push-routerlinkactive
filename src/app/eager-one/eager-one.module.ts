import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerOneComponent } from './eager-one/eager-one.component';
import { EagerOneRoutingModule } from './eager-one-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EagerOneRoutingModule
  ],
  declarations: [EagerOneComponent]
})
export class EagerOneModule { }
