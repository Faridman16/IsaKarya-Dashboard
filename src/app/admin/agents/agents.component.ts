import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsService } from 'src/app/_services/agents.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  agents: AgentsModel[];
  imgBackground = ['../assets/img/bg1.jpg', '../assets/img/bg2.jpg', '../assets/img/bg3.jpg'];
  isEdit: Boolean = true;

  constructor(
    private agentsService: AgentsService,
  ) { }

  ngOnInit() {
    this.agentsService.getAllAgents().subscribe(agents => this.agents = agents);
  }

}
