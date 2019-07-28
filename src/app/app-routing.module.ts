import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './_utilitesPage/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/admin', pathMatch: 'full'},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  // imports: [[RouterModule.forRoot(routes,{useHash:true})]],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
