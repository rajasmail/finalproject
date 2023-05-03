import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/pages/signin/signin.component';
import { SignupComponent } from 'src/pages/signup/signup.component';

const routes: Routes = [//hon la ne3mel routing aa hayde l page li jouwa
  {path:'',redirectTo:'/signin',pathMatch:'full' },
  {path:'signin',
   component:SigninComponent},
   {path:'signup',
   component:SignupComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
