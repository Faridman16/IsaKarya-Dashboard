import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../../../_models/routeInfo';
import { RouteInfoMock } from '../../../_mocks/routeInfoMock';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = RouteInfoMock;

  constructor() { }

  ngOnInit() {
  }

}
