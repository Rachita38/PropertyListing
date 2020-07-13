import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
  constructor() {  }

  ngOnInit(): void {}
  onListingSubmit(data: any): void{
     console.log(data);
    }
  }


