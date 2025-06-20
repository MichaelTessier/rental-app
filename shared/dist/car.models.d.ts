import { Image, Ratings } from "./common.models";
export declare enum CarStatus {
    Draft = "Draft",
    Active = "Active",
    Inactive = "Inactive"
}
export declare enum CarBrand {
    Audi = "Audi",
    Volkswagen = "Volkswagen",
    Hyundai = "Hyundai",
    Kia = "Kia",
    Subaru = "Subaru",
    Mazda = "Mazda",
    Lexus = "Lexus",
    Porsche = "Porsche",
    Jaguar = "Jaguar"
}
export declare enum CarCategory {
    Sedan = "Sedan",
    SUV = "SUV",
    Hatchback = "Hatchback",
    Coupe = "Coupe",
    Convertible = "Convertible",
    Minivan = "Minivan",
    Pickup = "Pickup"
}
export declare enum CarTransmission {
    Manual = "Manual",
    Automatic = "Automatic",
    SemiAutomatic = "Semi-Automatic",
    Electric = "Electric"
}
export declare enum CarFuelType {
    Petrol = "Petrol",
    Diesel = "Diesel",
    Electric = "Electric",
    Hybrid = "Hybrid"
}
export declare enum CarDoors {
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5
}
export declare enum CarSeats {
    Two = 2,
    Four = 4,
    Five = 5,
    Six = 6,
    Seven = 7
}
export interface Car {
    address: string;
    brand: CarBrand;
    createdAt?: Date;
    category: CarCategory;
    description: string;
    doors: CarDoors;
    fuelType: CarFuelType;
    id: string;
    images: Image[];
    millage: number;
    name: string;
    power: number;
    ratings: Ratings;
    reviews: string[];
    rentPerDay: number;
    seats: CarSeats;
    status: CarStatus;
    transmission: CarTransmission;
    updatedAt?: Date;
    year: number;
}
//# sourceMappingURL=car.models.d.ts.map