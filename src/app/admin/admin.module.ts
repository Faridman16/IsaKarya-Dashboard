import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AdminComponent } from './admin.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgentsComponent } from './agents/agents.component';
import { TrucksComponent } from './trucks/trucks.component';
import { GudangComponent } from './gudang/gudang.component';
import { DetailTrucksComponent } from './trucks/detail-trucks/detail-trucks.component';
import { DetailAgentComponent } from './detail-agent/detail-agent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OperationalComponent } from './operational/operational.component';
import { InOutComponent } from './in-out/in-out.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    AgentsComponent,
    TrucksComponent,
    GudangComponent,
    DetailTrucksComponent,
    DetailAgentComponent,
    OperationalComponent,
    InOutComponent,
    ModalsComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    NgbActiveModal,
  ],
  entryComponents: [
    ModalsComponent
  ]  
})
export class AdminModule { }
