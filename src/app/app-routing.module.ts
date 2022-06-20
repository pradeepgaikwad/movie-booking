import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { PaymentComponent } from './payment/payment.component';
import { RouteGuardService } from './service/route-guard.service';
import { ChildComponent } from './test/child/child.component';
import { ParentComponent } from './test/parent/parent.component';
import { QuestionsComponent } from './test/questions/questions.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate: [RouteGuardService]},
  {path: 'movie-details', component: MovieDetailsComponent, canActivate: [RouteGuardService]},
  {path: 'confirmation',component: ConfirmationComponent, canActivate: [RouteGuardService]},
{path: 'payment', component: PaymentComponent, canActivate: [RouteGuardService]},
  {path: 'parent', component: ParentComponent},
  {path: 'child',component: ChildComponent},
  {path: 'questions',component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
