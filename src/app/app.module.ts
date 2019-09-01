import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms'; //para validar forms
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component'; //auto generado con terminal ng g
import { GstGetComponent } from './gst-get/gst-get.component'; //auto generado con terminal ng g
import { GstEditComponent } from './gst-edit/gst-edit.component'; //auto generado con terminal ng g


@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent, //auto generado con terminal ng g
    GstGetComponent, //auto generado con terminal ng g
    GstEditComponent //auto generado con terminal ng g
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule, // libreria para loading
    ReactiveFormsModule, //valida forms
    HttpClientModule,
    
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
