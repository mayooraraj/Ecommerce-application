import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BxHomepageComponent } from './pages/bx-homepage/bx-homepage.component';
import { BxHeaderComponent } from './widget/organism/bx-header/bx-header.component';
import { authGuard } from './guards/auth.guard';
import { BxUserLoginComponent } from './widget/organism/bx-user-login/bx-user-login.component';
import { BxUserprofileComponent } from './widget/organism/bx-userprofile/bx-userprofile.component';
import { BxCartComponent } from './widget/organism/bx-cart/bx-cart.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:BxHomepageComponent},
  {path:'header',component:BxHeaderComponent},
  {path:'cart',component:BxCartComponent},
  {path :'user-login',component:BxUserLoginComponent},
  {path:'profile',component:BxUserprofileComponent,canActivate:[authGuard]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
