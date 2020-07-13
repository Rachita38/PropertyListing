import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Listing } from '../listing';
import { Observable, throwError, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public newListSubject = new Subject<any>();
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

addListing(data: { image: string; }): void{
  data.image = 'default-crib';
  this.newListSubject.next(data);
}

}
