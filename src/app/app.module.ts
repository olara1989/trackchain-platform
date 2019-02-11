import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { TraceComponent } from './trace/trace.component';
import { CetificationComponent } from './cetification/cetification.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { DataComponent } from './data/data.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { TraceStep1Component } from './trace/trace-step1/trace-step1.component';
import { TraceStep2Component } from './trace/trace-step2/trace-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    ActionComponent,
    TraceComponent,
    CetificationComponent,
    UserManagerComponent,
    DataComponent,
    OnboardingComponent,
    AccountComponent,
    FooterComponent,
    AccountSummaryComponent,
    TraceStep1Component,
    TraceStep2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
