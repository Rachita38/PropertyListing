import { Component, OnInit } from '@angular/core';
import {Listing} from './../data/Listing';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  Listings: Array<any> = Listing;
  constructor() { }

  ngOnInit(): void {
  }

}
