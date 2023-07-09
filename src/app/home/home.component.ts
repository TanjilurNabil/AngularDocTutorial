import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
HousingService;
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocationList]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // housingLocation: Housinglocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: 'assets/example-house.jpg',
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };
  // housingLocationList: Housinglocation[] = [
  //   {
  //     id: 9999,
  //     name: 'Test Home',
  //     city: 'Test city',
  //     state: 'ST',
  //     photo: 'assets/example-house.jpg',
  //     availableUnits: 99,
  //     wifi: true,
  //     laundry: false,
  //   },
  //   {
  //     id: 9999,
  //     name: 'Test Home',
  //     city: 'Test city',
  //     state: 'ST',
  //     photo: 'assets/example-house1.jpg',
  //     availableUnits: 99,
  //     wifi: true,
  //     laundry: false,
  //   },
  //   {
  //     id: 9999,
  //     name: 'Test Home',
  //     city: 'Test city',
  //     state: 'ST',
  //     photo: 'assets/example-house3.jpg',
  //     availableUnits: 99,
  //     wifi: true,
  //     laundry: false,
  //   },
  // ];
  housingLocationList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
