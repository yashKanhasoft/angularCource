import { Component } from '@angular/core';
import { Location } from './location';
@Component({
  selector: 'inv-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  shopName: string = 'TestS';
  locations: number = 10;

  locationList: Location[] = [
    {
      name: 'demo1',
      address: 'H 123',
      logo: 'test',
      createdDate: new Date('2023-04-14'),
      zone: 'east',
    },
    {
      name: 'demo2',
      address: 'H 1234',
      logo: 'test',
      createdDate: new Date('2023-04-14'),
      zone: 'east',
    },
    {
      name: 'demo3',
      address: 'H 12345',
      logo: 'test',
      createdDate: new Date('2023-04-14'),
      zone: 'east',
    },
  ];

  increseLocation() {
    ++this.locations;
    this.locationList.push({
      name: 'demo4',
      address: 'N 12345',
      logo: 'test',
      createdDate: new Date('2023-04-14'),
      zone: 'east'
    });
  }

  decreaseLocation() {
    --this.locations;
  }
}
