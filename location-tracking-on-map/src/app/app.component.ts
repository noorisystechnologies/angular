import { Component } from '@angular/core';
import { GeolocationService } from './shared/geolocation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// First Map
	sourceLocation = { lat: 20.55548, lng: 74.53018 }; // Example coordinates for San Francisco
	// destinationLocation!: { lat: number; lng: number; }
	destinationLocation = { lat: 20.54962, lng: 74.53482 };
	zoom: number = 15;


	// Second Map
	lat: any;
	lng: any;
	start_end_mark: any[] = [];
	latlng = [
		[
			20.55548,
			74.53018
		],
		[
			20.54962,
			74.53482
		],
	];

	// Third Map
	latitude!: number;
	longitude!: number;
	sourceLocation3 = { lat: 20.55548, lng: 74.53018 }; // Example coordinates for San Francisco
	destinationLocation3!: { lat: number; lng: number; }

	constructor(
		public service: GeolocationService
	) {
		// this i write because to display a marks on first place and last place
		this.start_end_mark.push(this.latlng[0]);
		this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
	}

	ngOnInit() {
		this.getLocation();
		this.getPosition();
	}

	// Get Location functionality (get latitude and longitude)
	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.latitude = position.coords.latitude;
					this.longitude = position.coords.longitude;
					this.destinationLocation3 = { lat: this.latitude, lng: this.longitude };
					console.log(position.coords);
					console.log(this.destinationLocation3);
				},
				(error) => {
					console.error('Error getting location', error);
				},
				{ enableHighAccuracy: true } // You can try enabling high accuracy
			);
		} else {
			console.error('Geolocation is not supported by this browser.');
		}
	}

	// Get Location functionality By third party API (get latitude and longitude)
	getPosition() {
		this.service.getPosition().then(pos => {
			console.log(`Position: ${pos.lat} ${pos.lng}`);
		});
	}

}
