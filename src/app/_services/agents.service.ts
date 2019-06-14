import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgentsModel } from '../_models/agentsModel';
import { AgentsMock } from '../_mocks/agentsMock';
import { AgentsProfileMock } from '../_mocks/agentsProfileMock';
import { AgentsProfileModel } from '../_models/agentsProfileModel';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup } from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  getAllAgents(): Observable<object[]> {
    let agents = [{name: 'samsudin', age: '10'}];
    this.fireDB.database.ref('/agents').on('value', function(snapshot) {
      // agents = (snapshot.val());
      // console.log(agents);
    });
    return of(agents);
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
