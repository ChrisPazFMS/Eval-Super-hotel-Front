export class Bedroom {
  id: number;
  number: number;
  type: string;
  price: number;
  available: boolean;

  constructor(
    id: number = 0,
    number: number = 0,
    type: string = '',
    price: number = 0,
    available: boolean = false
  ) {
    this.id = id;
    this.number = number;
    this.type = type;
    this.price = price;
    this.available = available;
  }
}
