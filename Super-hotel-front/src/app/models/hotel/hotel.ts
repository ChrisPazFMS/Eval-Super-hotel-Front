import { Bedroom } from '../bedroom/bedroom';
import { City } from '../city/city';

export class Hotel {
  id: number;
  name: string;
  address: string;
  phone: string;
  city: City;
  bedrooms: Bedroom[];
  description: string; // Assurez-vous que cette propriété est présente

  constructor(
    id: number = 0,
    name: string = '',
    address: string = '',
    phone: string = '',
    city: City = new City(),
    bedrooms: Bedroom[] = [],
    description: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.city = city;
    this.bedrooms = bedrooms;
    this.description = description; // Assurez-vous d'initialiser la propriété description
  }
}
