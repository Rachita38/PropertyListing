import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//importing the interface
import { Listing } from '../listing';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  Listings: Listing[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<Listing[]>('data/Listing.json').subscribe(response => {
      this.Listings = response;
      },
    error => {
      console.log(error);
    }
    );
}}
