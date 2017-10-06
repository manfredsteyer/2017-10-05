import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from './flight.service';
import { Flight } from '../../entities/flight';
import { NgForm } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { EventService } from '../../event.service';

@Component({
  selector: 'flight-search',
  templateUrl: 'flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {

  from: string;
  to: string;
  // flights: Array<Flight> = [];
  selectedFlight: Flight;

  // flights --> flights()
  get flights() {
    return this.flightService.flights;
  }

  basket: any = {
    "3": true,
    "4": false,
    "5": true
  };
  //private http: Http;

  constructor(
    private eventService: EventService,
    private flightService: FlightService) {
    // this.http = http;
  }

  search(): void {

      if (!this.from || !this.to) return;

      this.flightService.load(this.from, this.to);
  }

  delay(): void {
    this.flightService.delay();
  }

  select(f: Flight, selected: boolean) {

    this.basket[f.id] = selected;
    if (selected) {
      this.eventService.flightSelected.next(f);
    }

  }

}
