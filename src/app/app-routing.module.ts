import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login.component';
import { ActionComponent } from './action/action.component';
import { TraceComponent } from './trace/trace.component';
import { CetificationComponent } from './cetification/cetification.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { DataComponent } from './data/data.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { AccountComponent } from './account/account.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: MainComponent },
  { path: 'action', component: ActionComponent },
  { path: 'trace', component: TraceComponent },
  { path: 'certification', component: CetificationComponent },
  { path: 'account-summary', component: AccountSummaryComponent },
  { path: 'user-manager', component: UserManagerComponent },
  { path: 'data', component: DataComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'account', component: AccountComponent }  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
