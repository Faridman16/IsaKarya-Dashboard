import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsService } from 'src/app/_services/agents.service';
import { Observable, of } from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {
  listAgent: FormGroup;
  agentList: any;
  imgBackground = ['../assets/img/bg1.jpg', '../assets/img/bg2.jpg', '../assets/img/bg3.jpg'];
  isEdit: Boolean = true;

  constructor(
    private agentsService: AgentsService,
    private db: AngularFireDatabase,
  ) {   }

  async ngOnInit() {
    // this.db.list<any>('agents').valueChanges().subscribe(result => this.agentList = result);
    this.agentList = await this.getAgents()

    // this.agentList = await list;
    console.log(this.agentList);
  }

  snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
};  

  async getAgents(){
    var list = [];
    this.db.database.ref('agents').on('child_added', result => {
      list.push(result.val());
    });

    return list;
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
