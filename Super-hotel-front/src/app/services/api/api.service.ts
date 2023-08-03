import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Hotel } from 'src/app/models/hotel/hotel';
import { City } from 'src/app/models/city/city';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.host;

  constructor(private http: HttpClient) {}

  // Récupére les hôtels
  getAllHotels(): Observable<Hotel[]> {
    const url = `${this.baseUrl}${environment.hotels}`;
    return this.http.get<Hotel[]>(url).pipe(
      tap((hotels) => console.log(hotels)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  // Récupére les villes
  getAllCities(): Observable<City[]> {
    const url = `${this.baseUrl}/cities`;
    return this.http.get<City[]>(url).pipe(
      tap((cities) => console.log(cities)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  // Récupére les hôtels par ID de la ville
  getHotelsByCity(cityId: number): Observable<Hotel[]> {
    const url = `${this.baseUrl}/hotels/cities/${cityId}/hotels`;
    return this.http.get<Hotel[]>(url).pipe(
      tap((hotels) => console.log(hotels)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
