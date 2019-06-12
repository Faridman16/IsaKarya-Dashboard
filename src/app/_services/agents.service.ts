import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AgentsModel } from '../_models/agentsModel';
import { AgentsMock } from '../_mocks/agentsMock';
import { AgentsProfileMock } from '../_mocks/agentsProfileMock';
import { AgentsProfileModel } from '../_models/agentsProfileModel';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  getAllAgents(): Observable<AgentsModel[]> {
    return of(AgentsMock);
  }

  getAgentById(id: number): Observable<AgentsModel> {
    return of(AgentsMock).pipe((
      map(agents => agents.find(agent => agent.id === id))
    ));
  }

  getAgentProfiles(id: number): Observable<AgentsProfileModel> {
    return of(AgentsProfileMock).pipe((
      map(agents => agents.find(agent => agent.id === id))
    ));
  }

  addAgent(agent: AgentsModel, profile: AgentsProfileModel) {
    const lastAgentId = AgentsMock.length;
    agent.id = lastAgentId;

    const lastProfileId = AgentsProfileMock.length;
    profile.id = lastProfileId;

    console.log(agent);
    console.log(profile);
    AgentsMock.push(agent);
    AgentsProfileMock.push(profile);
  }

  constructor() { }
}
