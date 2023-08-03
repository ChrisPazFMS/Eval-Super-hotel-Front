import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city/city';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cities: City[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getAllCities().subscribe((cities: City[]) => {
      this.cities = cities;
    });
  }
}
