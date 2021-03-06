import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { LoginService } from './services/login.service';
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [LayoutComponent, FooterComponent, NavbarComponent, UserComponent, UserListComponent, UserCardComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, UserListComponent, ]

})
export class SharedModule { }
