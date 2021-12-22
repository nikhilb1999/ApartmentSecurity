import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisitorComponent } from './visitor/visitor.component';
import { AddVivitorComponent } from './add-vivitor/add-vivitor.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitorComponent,
    AddVivitorComponent,
    AddVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
