import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-one',
    loadChildren: 'app/lazy-one/lazy-one.module#LazyOneModule'
  },
  {
    path: 'lazy-two',
    loadChildren: 'app/lazy-two/lazy-two.module#LazyTwoModule'
  },
  {
    path: '',
    redirectTo: 'eager-one',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
