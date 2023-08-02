import { Bedroom } from '../bedroom/bedroom';
import { City } from '../city/city';

export class Hotel {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: City; // Propriété pour représenter la relation avec la ville
  bedrooms: Bedroom[]; // Propriété pour représenter les chambres de l'hôtel

  constructor(
    id: number = 0,
    name: string = '',
    address: string = '',
    phone: string = '',
    city: City = new City(),
    bedrooms: Bedroom[] = []
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.city = city;
    this.bedrooms = bedrooms;
  }
}
