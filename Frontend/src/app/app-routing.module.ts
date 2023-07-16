import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'home',component:HomepageComponent},{path:'add',component:AddComponent},{path:'edit',component:EditComponent},{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
