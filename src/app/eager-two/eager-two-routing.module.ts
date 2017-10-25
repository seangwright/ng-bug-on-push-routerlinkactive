import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EagerTwoComponent } from './eager-two/eager-two.component';


const routes: Routes = [
  {
    path: 'eager-two',
    component: EagerTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerTwoRoutingModule {}
