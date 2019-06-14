import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgentsModel } from '../_models/agentsModel';
import { AgentsMock } from '../_mocks/agentsMock';
import { AgentsProfileMock } from '../_mocks/agentsProfileMock';
import { AgentsProfileModel } from '../_models/agentsProfileModel';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  getAllAgents(): Observable<AgentsModel[]> {
    return of(AgentsMock);
  }

  // getAgentById(id: number): Observable<AgentsModel> {
  //   return of(AgentsMock).pipe((
  //     map(agents => agents.find(agent => agent.id === id))
  //   ));
  // }

  getAgentProfiles(id: number): Observable<AgentsProfileModel> {
    return of(AgentsProfileMock).pipe((
      map(agents => agents.find(agent => agent.id === id))
    ));
  }

  addAgent(agent) {
    console.log('Phase Two');
    const agents = this.fireDB.database.ref('agents');
    agents.push(agent);
    console.log('Sukses!')
  }

  constructor(private fireDB: AngularFireDatabase) { }
}
