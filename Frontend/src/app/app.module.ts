import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ErrorComponent } from './pages/error/error.component';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { EmployeedataService } from './employeedata.service';
import { LoginservService } from './loginserv.service';
import { TokeninterceptorService } from './tokeninterceptor.service';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { authGuard } from './auth.guard';
import { ViewonlyComponent } from './pages/viewonly/viewonly.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    AddComponent,
    EditComponent,
    ErrorComponent,
    ViewonlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [LoginservService,EmployeedataService,{provide:HTTP_INTERCEPTORS,useClass:TokeninterceptorService,multi:true},authGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
