import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
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
    // enum: ["available", "rented", "maintenance"],
    default: "Draft",
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
    enum: [
      "Toyota",
      "Honda",
      "Ford",
      "Chevrolet",
      "Nissan",
      "BMW",
      "Mercedes-Benz",
      "Audi",
      "Volkswagen",
      "Hyundai",
      "Kia",
      "Subaru",
      "Mazda",
      "Lexus",
      "Porsche",
      "Jaguar",
    ],
    message: "Invalid car brand"
  },
  year: {
    type: Number,
    required: [true, "Car year is required"],
  },
  transmission: {
    type: String,
    required: [true, "Car transmission type is required"],
  },
  millage: {
    type: Number,
    required: [true, "Car millage is required"],
  },
  power: {
    type: Number,
    required: [true, "Car power is required"],
  },
  seat: {
    type: Number,
    required: [true, "Car seat count is required"],
  },
  doors: {
    type: Number,
    required: [true, "Car door count is required"],
  },
  fuelType: {
    type: String,
    required: [true, "Car fuel type is required"],
  },
  category: {
    type: String,
    required: [true, "Car category is required"],
  },
  reviews: [String]
  
}, {
  timestamps: true
})


export default mongoose.model("Car", carSchema)