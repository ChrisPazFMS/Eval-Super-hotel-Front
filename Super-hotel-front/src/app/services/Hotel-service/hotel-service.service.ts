import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hotel } from 'src/app/models/hotel/hotel';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private selectedHotels: Hotel[] = [];
  private selectedHotelsSubject = new Subject<Hotel[]>();

  constructor(private apiService: ApiService) {}

  setSelectedHotels(hotels: Hotel[]) {
    this.selectedHotels = hotels;
  }

  getSelectedHotels() {
    return this.selectedHotels;
  }

  // Renvoyer un observable pour s'abonner à l'événement
  getSelectedHotelsSubject() {
    return this.selectedHotelsSubject.asObservable();
  }

  // Émettre les hôtels sélectionnés
  emitSelectedHotels() {
    this.selectedHotelsSubject.next(this.selectedHotels);
  }

  loadAllHotels() {
    this.apiService.getAllHotels().subscribe((hotels: Hotel[]) => {
      this.setSelectedHotels(hotels);
      this.emitSelectedHotels();
    });
  }
}
