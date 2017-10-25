import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerOneComponent } from './eager-one/eager-one.component';


const routes: Routes = [
  {
    path: 'eager-one',
    component: EagerOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerOneRoutingModule {}
