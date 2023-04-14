import { Component,Input } from '@angular/core';
import { Location } from '../location';

@Component({
  selector: 'inv-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent {
  @Input() locations:Location[] = [];
}
