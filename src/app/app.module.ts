import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorService } from './interceptors/error-interceptor/error-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, HomeModule, SharedModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorInterceptorService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
