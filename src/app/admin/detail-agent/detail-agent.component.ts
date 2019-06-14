import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsProfileModel } from 'src/app/_models/agentsProfileModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentsService } from 'src/app/_services/agents.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.css']
})
export class DetailAgentComponent implements OnInit {

  imgBackground = 'assets/img/bg1.jpg';
  agent: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentsService,
    private fb: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
    // const agentId = this.route.snapshot.paramMap.get('id');
    // if (agentId) {
    //   this.agentService.getAgentById(+agentId).subscribe(agent => this.agent = agent);
    //   this.agentService.getAgentProfiles(+agentId).subscribe(agentProfiles => this.agentProfiles = agentProfiles);
    // }
  }

  createForm() {
    this.agent = new FormGroup({
      name: new FormControl(''),
      owner: new FormControl(''),
      alamat: new FormControl(''),
      hp: new FormControl(''),
    });
  }  

  onAddAgent() {
    console.log(this.agent);
    this.agentService.addAgent(this.agent.value);
    this.createForm();
  }

}
