import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { LazyTwoComponent } from './lazy-two/lazy-two.component';

@NgModule({
  imports: [
    CommonModule,
    LazyTwoRoutingModule
  ],
  declarations: [LazyTwoComponent]
})
export class LazyTwoModule { }
