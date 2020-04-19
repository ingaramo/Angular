import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingRoutingModule } from './pages-routing-routing.module';



@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingRoutingModule
  ],
  exports:[HomeComponent, LoginComponent]
})
export class PagesModule { }
