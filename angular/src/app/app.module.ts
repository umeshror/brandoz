import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
