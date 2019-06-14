import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsService } from 'src/app/_services/agents.service';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  listAgent: FormGroup;
  agents: any;
  imgBackground = ['../assets/img/bg1.jpg', '../assets/img/bg2.jpg', '../assets/img/bg3.jpg'];
  isEdit: Boolean = true;

  constructor(
    private agentsService: AgentsService,
    db: AngularFireDatabase,
  ) { db.list<any>('agents').valueChanges().subscribe(result => this.agents = result) }

  ngOnInit() {
    // this.getAgents();
    // this.createForm();
    // console.log(this.agents);
    console.log(this.agents);
  }

  getAgents(){
    this.agentsService.getAllAgents().subscribe(result => this.agents = result);
  }

  createForm() {
    this.listAgent = new FormGroup({
      name: new FormControl(''),
      owner: new FormControl(''),
      alamat: new FormControl(''),
      hp: new FormControl(''),
    });
  }  

}
