import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsProfileModel } from 'src/app/_models/agentsProfileModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentsService } from 'src/app/_services/agents.service';

@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.css']
})
export class DetailAgentComponent implements OnInit {

  agent: AgentsModel = {
    id: 0,
    name: '',
    address: '',
    desc: '',
    img: '',
  };
  agentProfiles: AgentsProfileModel;

  imgBackground = 'assets/img/bg1.jpg';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentsService,
  ) { }

  ngOnInit() {
    const agentId = this.route.snapshot.paramMap.get('id');
    if (agentId) {
      this.agentService.getAgentById(+agentId).subscribe(agent => this.agent = agent);
      this.agentService.getAgentProfiles(+agentId).subscribe(agentProfiles => this.agentProfiles = agentProfiles);
    }
  }

  onAddAgent() {
    this.agentService.addAgent(this.agent, this.agentProfiles);
  }

}
