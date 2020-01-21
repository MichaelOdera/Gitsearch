import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoriesComponent} from './repositories/repositories.component';


const routes: Routes = [
  {path:'', component:ProfileComponent},
  {path:'profile', component:ProfileComponent},
  {path:'repos', component:RepositoriesComponent},
  {path:'**', component:NotFoundComponent},
  {path: '', redirectTo:"/profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
