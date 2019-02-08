import { Component, OnInit,  ViewChild } from '@angular/core';
import { OnlineUsersService } from '../online-users.service';
import { interval } from 'rxjs';

import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  users: Object [] = [];
  name: string;
  lat = 51.464712;
  lng = -0.456934;
  airplaneIcon = 'assets/jet.png';
  atcIcon = 'assets/antenna.png';

  constructor(private usersService: OnlineUsersService) {
    this.users = usersService.findAll();
  }

  ngOnInit() {
    navigator.geolocation
              .getCurrentPosition((position) => this.setMapCoordinates(position) );
    interval(60000).subscribe(r => { this.users = this.usersService.findAll(); });
  }

  private setMapCoordinates(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;
  }
}
