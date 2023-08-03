import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel/hotel';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  hotels!: Hotel[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.apiService.getAllHotels().subscribe((hotels: Hotel[]) => {
      this.hotels = hotels;
    });
  }
}
