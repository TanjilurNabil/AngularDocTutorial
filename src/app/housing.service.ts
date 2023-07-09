import { Injectable } from '@angular/core';
import { Housinglocation } from './housinglocation';
@Injectable({
  providedIn: 'root',
})
export class HousingService {
  protected housingLocationList: Housinglocation[] = [
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house1.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
    {
      id: 9999,
      name: 'Test Home',
      city: 'Test city',
      state: 'ST',
      photo: 'assets/example-house3.jpg',
      availableUnits: 99,
      wifi: true,
      laundry: false,
    },
  ];
  getAllHousingLocations(): Housinglocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): Housinglocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
  constructor() {}
}
