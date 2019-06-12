import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrucksService } from 'src/app/_services/trucks.service';
import { TrucksModel } from 'src/app/_models/trucksModel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-trucks',
  templateUrl: './detail-trucks.component.html',
  styleUrls: ['./detail-trucks.component.css']
})
export class DetailTrucksComponent implements OnInit {

  truck: TrucksModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private trucksService: TrucksService,
    ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.trucksService.getTruckById(+id).subscribe(truck => {
      this.truck = truck;
    });
  }

}
