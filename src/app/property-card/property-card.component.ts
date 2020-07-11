import { Component, OnInit, Input } from '@angular/core';
import {Listing} from './../listing';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('listing') listing: Listing;
  constructor() { }

  ngOnInit(): void {
    let bedrooms = this.listing.bedrooms;
  }

}
