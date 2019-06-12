import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  i = 0;

  images1 = [`../assets/img/trucks/truck1.jpg`, `../assets/img/trucks/truck2.jpg`, `../assets/img/trucks/truck3.jpg`];
  images2 = [`../assets/img/trucks/truck5.jpg`, `../assets/img/trucks/truck6.jpg`, `../assets/img/trucks/truck7.jpg`];
  images3 = [`../assets/img/trucks/truck4.jpg`, `../assets/img/trucks/truck8.jpg`, `../assets/img/trucks/truck9.jpg`];

  constructor() {}


  ngOnInit() {
  }

}
