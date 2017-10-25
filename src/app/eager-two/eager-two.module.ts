import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerTwoComponent } from './eager-two/eager-two.component';
import { EagerTwoRoutingModule } from './eager-two-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EagerTwoRoutingModule
  ],
  declarations: [EagerTwoComponent]
})
export class EagerTwoModule { }
