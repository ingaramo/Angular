import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { LoginComponent } from './pages/components/login/login.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'},
  //{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

