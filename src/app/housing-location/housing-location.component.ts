import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Housinglocation } from '../housinglocation';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocationList.photo"
        alt="Exterior photo of {{ housingLocationList.name }}"
      />
      <h2 class="listing-heading">{{ housingLocationList.name }}</h2>
      <p class="listing-location">{{ housingLocationList.city }},</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocationList!: Housinglocation;
}
