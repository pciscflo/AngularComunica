import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { Campo1Component } from './general/campo1/campo1.component';
import { Campo2Component } from './general/campo2/campo2.component';
import { Campo3Component } from './general/campo3/campo3.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    Campo1Component,
    Campo2Component,
    Campo3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
