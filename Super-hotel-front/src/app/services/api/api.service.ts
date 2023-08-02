import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Hotel } from 'src/app/models/hotel/hotel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.host;

  constructor(private http: HttpClient) {}

  // Récupérer tous les hôtels
  getAllHotels(): Observable<Hotel[]> {
    const url = `${this.baseUrl}${environment.hotels}`;
    return this.http.get<Hotel[]>(url);
  }
}
