import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EagerOneModule } from './eager-one/eager-one.module';
import { EagerTwoModule } from './eager-two/eager-two.module';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { NavigationOnPushComponent } from './navigation-on-push/navigation-on-push.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationOnPushComponent
  ],
  imports: [
    RouterModule,
    EagerOneModule,
    EagerTwoModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
