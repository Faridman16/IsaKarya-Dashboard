import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  i = 0;

  images1 = [`img/../assets/img/trucks/truck1.jpg`, `img/../assets/img/trucks/truck2.jpg`, `img/../assets/img/trucks/truck3.jpg`];
  images2 = [`img/../assets/img/trucks/truck5.jpg`, `img/../assets/img/trucks/truck6.jpg`, `img/../assets/img/trucks/truck7.jpg`];
  images3 = [`img/../assets/img/trucks/truck4.jpg`, `img/../assets/img/trucks/truck8.jpg`, `img/../assets/img/trucks/truck9.jpg`];

  constructor() {}


  ngOnInit() {
  }

}
