import mongoose from "mongoose";
import { Car, CarBrand, CarCategory, CarDoors, CarFuelType, CarSeats, CarStatus, CarTransmission } from "@rental-app/shared"

const carSchema = new mongoose.Schema<Car>({
  name: {
    type: String,
    required: [true, "Car name is required"],
  },
  description: {
    type: String,
    required: [true, "Car description is required"],
  },
  status: {
    type: String,
    default: CarStatus.Draft,
    enum: {
      values: Object.values(CarStatus),
      message: "Invalid car status"
    }
  },
  rentPerDay: {
    type: Number,
    required: [true, "Rent per day is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  images: [
    {
      url: String,
      publicId: String,
    }
  ],
  brand: {
    type: String,
    required: [true, "Car brand is required"],
    enum: {
      values: Object.values(CarBrand),
      message: "Invalid car brand"
    }
  },
  year: {
    type: Number,
    required: [true, "Car year is required"],
  },
  transmission: {
    type: String,
    required: [true, "Car transmission type is required"],
    enum: {
      values: Object.values(CarTransmission),
      message: "Invalid car transmission type"
    }
  },
  millage: {
    type: Number,
    required: [true, "Car millage is required"],
  },
  power: {
    type: Number,
    required: [true, "Car power is required"],
  },
  seats: {
    type: Number,
    required: [true, "Car seats count is required"],
    enum: {
      values: Object.values(CarSeats),
      message: "Invalid car seats count"
    }
  },
  doors: {
    type: Number,
    required: [true, "Car door count is required"],
    enum: {
      values: Object.values(CarDoors),
      message: "Invalid car door count"
    }
  },
  fuelType: {
    type: String,
    required: [true, "Car fuel type is required"],
    enum: {
      values: Object.values(CarFuelType),
      message: "Invalid car fuel type"
    }
  },
  category: {
    type: String,
    required: [true, "Car category is required"],
    enum :{
      values: Object.values(CarCategory),
      message: "Invalid car category"
    }
  },
  reviews: [String]
  
}, {
  timestamps: true
})

carSchema.virtual("ratings").get(function() {
  return {
    value: 5,
    count: 10
  }
});
 
const Car = mongoose.model<Car>("Car", carSchema)

export default Car;