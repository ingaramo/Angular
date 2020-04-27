import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[HomeComponent, LoginComponent]
})
export class PagesModule { }
