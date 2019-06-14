import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../../environments/environment';

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
  ],
  imports: [
    CommonModule,
    NgbModule,
    ChartsModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,    
  ],
})
export class AdminModule { }
