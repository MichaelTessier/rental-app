import { connectToDatabase } from "../services/mongoose/mongoose.service";
import Car from "../models/car.models";
import { cars } from "./cars";

const seedCars = async () => {
  try {
    await connectToDatabase()

    await Car.deleteMany();

    await Car.insertMany(cars);
    console.log('Cars seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding cars:', error);
    process.exit(1);
  }
}

seedCars()