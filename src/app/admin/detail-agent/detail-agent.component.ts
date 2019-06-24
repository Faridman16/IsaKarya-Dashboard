import { Component, OnInit } from '@angular/core';
import { AgentsModel } from 'src/app/_models/agentsModel';
import { AgentsProfileModel } from 'src/app/_models/agentsProfileModel';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentsService } from 'src/app/_services/agents.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UploadService } from 'src/app/_services/upload.service';

@Component({
  selector: 'app-detail-agent',
  templateUrl: './detail-agent.component.html',
  styleUrls: ['./detail-agent.component.css']
})
export class DetailAgentComponent implements OnInit {

  imgBackground = 'assets/img/bg1.jpg';
  imgUrl: any = 'https://firebasestorage.googleapis.com/v0/b/isakarya-dashboard.appspot.com/o/no-image.png?alt=media&token=2ab73b11-cb86-4463-a0e6-104bd6ae00cb';
  upload;
  file: File;
  progresUpload;
  imgProfile;
  agent: any;
  uploadUrl: string = 'https://firebasestorage.googleapis.com/v0/b/isakarya-dashboard.appspot.com/o/no-image.png?alt=media&token=2ab73b11-cb86-4463-a0e6-104bd6ae00cb';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private agentService: AgentsService,
    private uploadService: UploadService,
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

  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        this.file = event.target.files[0];
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (_event) => { 
          this.imgUrl = reader.result; 
        }
      }
  }  

  createForm() {
    this.agent = new FormGroup({
      name: new FormControl(''),
      owner: new FormControl(''),
      alamat: new FormControl(''),
      hp: new FormControl(''),
    });
  }  

  onUpload(e) {
    e.preventDefault();
    this.uploadService.uploadFile(this.file).then(result => {
      console.log('Upload Sukses!');
      this.uploadUrl = result;
    });
  }

  onAddAgent() {
    this.agent.value.imgUrl = this.uploadUrl;
    console.log(this.agent);
    this.agentService.addAgent(this.agent.value);
    this.createForm();
  }

}
