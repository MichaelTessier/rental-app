"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarSeats = exports.CarDoors = exports.CarFuelType = exports.CarTransmission = exports.CarCategory = exports.CarBrand = exports.CarStatus = void 0;
var CarStatus;
(function (CarStatus) {
    CarStatus["Draft"] = "Draft";
    CarStatus["Active"] = "Active";
    CarStatus["Inactive"] = "Inactive";
})(CarStatus || (exports.CarStatus = CarStatus = {}));
var CarBrand;
(function (CarBrand) {
    CarBrand["Audi"] = "Audi";
    CarBrand["Volkswagen"] = "Volkswagen";
    CarBrand["Hyundai"] = "Hyundai";
    CarBrand["Kia"] = "Kia";
    CarBrand["Subaru"] = "Subaru";
    CarBrand["Mazda"] = "Mazda";
    CarBrand["Lexus"] = "Lexus";
    CarBrand["Porsche"] = "Porsche";
    CarBrand["Jaguar"] = "Jaguar";
})(CarBrand || (exports.CarBrand = CarBrand = {}));
var CarCategory;
(function (CarCategory) {
    CarCategory["Sedan"] = "Sedan";
    CarCategory["SUV"] = "SUV";
    CarCategory["Hatchback"] = "Hatchback";
    CarCategory["Coupe"] = "Coupe";
    CarCategory["Convertible"] = "Convertible";
    CarCategory["Minivan"] = "Minivan";
    CarCategory["Pickup"] = "Pickup";
})(CarCategory || (exports.CarCategory = CarCategory = {}));
var CarTransmission;
(function (CarTransmission) {
    CarTransmission["Manual"] = "Manual";
    CarTransmission["Automatic"] = "Automatic";
    CarTransmission["SemiAutomatic"] = "Semi-Automatic";
    CarTransmission["Electric"] = "Electric";
})(CarTransmission || (exports.CarTransmission = CarTransmission = {}));
var CarFuelType;
(function (CarFuelType) {
    CarFuelType["Petrol"] = "Petrol";
    CarFuelType["Diesel"] = "Diesel";
    CarFuelType["Electric"] = "Electric";
    CarFuelType["Hybrid"] = "Hybrid";
})(CarFuelType || (exports.CarFuelType = CarFuelType = {}));
var CarDoors;
(function (CarDoors) {
    CarDoors["Two"] = "2";
    CarDoors["Three"] = "3";
    CarDoors["Four"] = "4";
    CarDoors["Five"] = "5";
})(CarDoors || (exports.CarDoors = CarDoors = {}));
var CarSeats;
(function (CarSeats) {
    CarSeats["Two"] = "2";
    CarSeats["Four"] = "4";
    CarSeats["Five"] = "5";
    CarSeats["Six"] = "6";
    CarSeats["Seven"] = "7";
})(CarSeats || (exports.CarSeats = CarSeats = {}));
//# sourceMappingURL=interfaces.js.map