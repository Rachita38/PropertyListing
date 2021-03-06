import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// importing the interface
import { Listing } from '../listing';
import {PropertyService} from './../services/property.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  Listings: Listing[];
  constructor(private http: HttpClient, public propertyService: PropertyService) { }

  ngOnInit(): void {
  // this.Listings =  this.propertyService.getListings();

  this.http.get<Listing[]>('data/Listing.json').subscribe(response =>  this.Listings = response,
  error => console.log(error) );

  // this.propertyService.newListSubject.subscribe(data => this.Listings.push(data));
  // To add the listing to the Begining of Array
  this.propertyService.newListSubject.subscribe(data => this.Listings = [data, ...this.Listings]);
  }}
