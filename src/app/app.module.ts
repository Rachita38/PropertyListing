import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { HttpClientModule } from '@angular/common/http';
import {PropertyService} from './services/property.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertyListingComponent,
    AddListingFormComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PropertyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
