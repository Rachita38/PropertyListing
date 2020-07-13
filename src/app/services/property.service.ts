import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Listing } from '../listing';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  getListings(): Listing[]
  {
    let data: Listing[] = [];
    this.http.get<Listing[]>('data/Listing.json').subscribe(response => {
      data = response;
      },
    error => {
      console.log(error);
    }
    );
    return data;
  }

}
