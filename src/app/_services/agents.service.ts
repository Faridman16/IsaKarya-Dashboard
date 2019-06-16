import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgentsModel } from '../_models/agentsModel';
import { AgentsMock } from '../_mocks/agentsMock';
import { AgentsProfileMock } from '../_mocks/agentsProfileMock';
import { AgentsProfileModel } from '../_models/agentsProfileModel';
import { map } from 'rxjs/operators';
import { AngularFireDatabase} from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  getAllAgents(): Observable<AgentsModel[]> {
    return this.fireDB.list<AgentsModel>('agents').valueChanges();
    
    // return this.http.get('https://isakarya-dashboard.firebaseio.com/agents.json?print=pretty');
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
    const agents = this.fireDB.database.ref('agents');
    agents.push(agent);
    console.log('Sukses!')
  }

  constructor(
    private fireDB: AngularFireDatabase,
    private http: HttpClient,
    ) { }
}
