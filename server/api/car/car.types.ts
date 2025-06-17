export type CarInput = {
  name: string;
  description: string;
  status?: string;
  rentPerDay: number;
  address: string;
  images?: [string];
  brand: string;
  year: number;
  transmission: string;
  millage: number;
  power: number;
  seats: number;
  doors: number;
  fuelType: string;
  category: string;
  reviews?: string[];
};