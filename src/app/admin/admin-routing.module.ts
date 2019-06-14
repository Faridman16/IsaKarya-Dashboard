import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { TrucksComponent } from './trucks/trucks.component';
import { GudangComponent } from './gudang/gudang.component';
import { DetailTrucksComponent } from './trucks/detail-trucks/detail-trucks.component';
import { DetailAgentComponent } from './detail-agent/detail-agent.component';

const adminRoutes: Routes = [
  {path: '', component: AdminComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'agents', component: AgentsComponent},
      {path: 'trucks', component: TrucksComponent},
      {path: 'gudang', component: GudangComponent},
      {path: 'trucks/:id', component: DetailTrucksComponent},
      {path: 'agents/:id', component: DetailAgentComponent},
      {path: 'agents/tambah', component: DetailAgentComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }