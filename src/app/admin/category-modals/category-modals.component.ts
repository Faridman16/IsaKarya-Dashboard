import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UtilitesService } from 'src/app/_services/utilites.service';
import { EventEmitterService } from 'src/app/_services/event-emitter.service';

@Component({
  selector: 'app-category-modals',
  templateUrl: './category-modals.component.html',
  styleUrls: ['./category-modals.component.css']
})
export class CategoryModalsComponent implements OnInit {

  ctg: FormGroup;

  constructor(
    private activeModal : NgbActiveModal,
    private utilService: UtilitesService,
    private eventEmitterService: EventEmitterService,
  ) {this.createForm()}

  ngOnInit() {
  }

  createForm() {
    this.ctg = new FormGroup({
      type: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    });
  } 

  addCtg(){
    let ctg = this.ctg.value;
    console.log(ctg);
    this.utilService.addCtg(ctg).subscribe( res => {
      console.log(res);
      this.activeModal.close('Close click');
      this.eventEmitterService.onAdd();
    },
    err => {
      console.log(err);
    }
  );
    this.createForm();
  }  

}
