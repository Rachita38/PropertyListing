import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {PropertyService} from './../services/property.service';


@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newListingForm') newListingform: NgForm;
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
 constructor(public listService: PropertyService) {  }

  ngOnInit(): void {}

  onListingSubmit(data: any): void{
     this.listService.addListing(data);
     this.newListingform.reset();
    }
  }


