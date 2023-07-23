import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ErrorComponent } from './pages/error/error.component';
import { authGuard } from './auth.guard';
import { ViewonlyComponent } from './pages/viewonly/viewonly.component';

const routes: Routes = [{path:'',component:LoginComponent},{path:'view',canActivate:[authGuard] ,component:ViewonlyComponent},{path:'home',canActivate:[authGuard] ,component:HomepageComponent},{path:'add',canActivate:[authGuard],component:AddComponent},{path:'edititem/:id',canActivate:[authGuard],component:EditComponent},{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
