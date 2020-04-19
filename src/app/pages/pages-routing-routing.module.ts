import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes =[
  {path: 'home', loadChildren:() => import('./pages.module').then (m => m.PagesModule) },
  {path: '', pathMatch: 'full', redirectTo:'login'}, //que venga vacia
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingRoutingModule { }
