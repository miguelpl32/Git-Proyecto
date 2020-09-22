import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: ProfileComponent },
  { path: 'repo', component: RepoComponent },
  { path: 'follow', component: FollowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
