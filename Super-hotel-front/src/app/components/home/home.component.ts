import { Component } from '@angular/core';
import { HotelService } from 'src/app/services/Hotel-service/hotel-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private hotelService: HotelService) {}
  loadAllHotels() {
    this.hotelService.loadAllHotels();
  }
}
