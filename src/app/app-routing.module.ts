import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// setup the components we want AppRoutingModule
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
   // home path
  {
    path: '',
    component: HomeComponent
  },
   // about path
   {
    path: 'about/:id',
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
