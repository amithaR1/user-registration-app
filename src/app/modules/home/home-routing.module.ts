import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component';
import { EntryPageComponent } from './entry-page/entry-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-registration',
    pathMatch: 'full'
  },
  {
    path: 'user-registration',
    component: EntryPageComponent
  },
  {
    path: '**',
    component: NoPageFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
