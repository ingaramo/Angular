import { NgModule } from '@angular/core';
// Required services for navigation
import { Routes, RouterModule } from '@angular/router';

// Import all the components for which navigation service has to be activated 
import { LoginComponent } from './pages/components/login/login.component';
import { HomeComponent } from './pages/components/home/home.component';
import { NotFoundComponent } from './pages/components/not-found/not-found.component';
import { LoginGuard } from './shared/guards/login.guard';
import { UserGuard } from './shared/guards/user.guard';
import { UserCardComponent } from './shared/components/user-card/user-card.component';

const routes: Routes =[
  {path: 'home', component: HomeComponent, canActivate: [LoginGuard]  },
  {path: 'user/:id', component: UserCardComponent, canActivate: [UserGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo:'login'},
{path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

