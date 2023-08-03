// cart.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hotel } from 'src/app/models/hotel/hotel';
import { HotelService } from 'src/app/services/Hotel-service/hotel-service.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  hotels: Hotel[] = [];
  protected selectedHotelsSubscription: Subscription = new Subscription();

  constructor(
    private apiService: ApiService,
    private hotelService: HotelService
  ) {}

  ngOnInit() {
    this.loadHotels();
    this.selectedHotelsSubscription = this.hotelService
      .getSelectedHotelsSubject()
      .subscribe((hotels: Hotel[]) => {
        this.hotels = hotels;
        console.log('ngOnInit' + this.hotels);
      });
  }

  // Se désabonner pour éviter les fuites de mémoire
  ngOnDestroy() {
    this.selectedHotelsSubscription.unsubscribe();
  }

  loadHotels() {
    this.hotels = this.hotelService.getSelectedHotels();
  }
  loadAllHotels() {
    this.hotelService.loadAllHotels();
  }
}
