import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city/city';
import { Hotel } from 'src/app/models/hotel/hotel';
import { HotelService } from 'src/app/services/Hotel-service/hotel-service.service';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cities: City[] = [];

  constructor(
    private apiService: ApiService,
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiService.getAllCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
    this.scrollToHotels();
  }

  loadAllHotels() {
    this.hotelService.loadAllHotels();
  }

  loadHotelsByCity(city: City) {
    this.apiService.getHotelsByCity(city.id).subscribe((hotels: Hotel[]) => {
      this.hotelService.setSelectedHotels(hotels);
      console.log('getHotelsByCity service : ' + JSON.stringify(hotels));
      this.hotelService.emitSelectedHotels();
    });
  }

  scrollToHotels() {
    this.router.navigate(['/cart'], { fragment: 'hotels-section' });
  }
}
