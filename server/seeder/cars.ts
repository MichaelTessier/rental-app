import { CarBrand, CarCategory, CarDoors, CarFuelType, CarInput, CarSeats, CarStatus, CarTransmission } from "../api/__generated__/graphql";

export const cars: CarInput[] = [
  {
    name: "Audi A4",
    description:
      "The Audi A4 is a luxury compactCarCategory.Sedan,that combines sophisticated design, advanced technology, and a dynamic driving experience. Known for its premium interior and precise handling, the A4 offers a range of powerful engines, including turbocharged four-cylinder options. Audi’s Quattro all-wheel-drive system provides excellent traction and stability, making it a great choice for various driving conditions. The A4’s infotainment system, with a large touchscreen and intuitive controls, enhances the overall driving experience, ensuring comfort and connectivity.",
    status: CarStatus.Published,
    rentPerDay: 120,
    address: "New York City, NY",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723402978/gorental/demo/cars/biq5bagxwty4evbdsiac.jpg",
        publicId: "gorental/demo/cars/biq5bagxwty4evbdsiac",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723402978/gorental/demo/cars/imkqapuaa3mutfpgudsr.webp",
        publicId: "gorental/demo/cars/imkqapuaa3mutfpgudsr",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723402982/gorental/demo/cars/fi9jfdbyxnwrkxqsa5le.jpg",
        publicId: "gorental/demo/cars/fi9jfdbyxnwrkxqsa5le",
      },
    ],
    year: 2012,
    power: 2500,
    millage: 20500,
    brand: CarBrand.Audi,
    transmission: CarTransmission.Automatic,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Five,
    doors: CarDoors.Four,
    category: CarCategory.Sedan,
  },
  {
    name: "BMW 3 Series",
    description:
      "The BMW 3 Series is a renowned compact executive car that has been a benchmark for driving enthusiasts. It offers a perfect blend of performance, luxury, and technology. The 3 Series is available in various trims, including the high-performance M3, catering to different driving preferences. With its rear-wheel-drive layout, sharp steering, and potent engine options, the 3 Series delivers an exhilarating driving experience. Inside, the cabin is well-appointed with high-quality materials and cutting-edge technology, providing both comfort and a premium feel.",
    status: CarStatus.Published,
    rentPerDay: 80,
    address: "128-94 Sussex St, Buffalo, NY 14215, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403174/gorental/demo/cars/ndqlknmzi0adx2h6kgz1.jpg",
        publicId: "gorental/demo/cars/ndqlknmzi0adx2h6kgz1",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403179/gorental/demo/cars/g97qvzpc7gquivemuisd.jpg",
        publicId: "gorental/demo/cars/g97qvzpc7gquivemuisd",
      },
    ],
    year: 2015,
    power: 2800,
    millage: 45000,
    brand: CarBrand.Bmw,
    transmission: CarTransmission.Automatic,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Four,
    doors: CarDoors.Four,
    category: CarCategory.Convertible,
  },
  {
    name: "Ford Mustang",
    description:
      "The Ford Mustang is an iconic American muscle car that has captivated car enthusiasts for decades. Known for its powerful engines, bold styling, and aggressive stance, the Mustang offers a thrilling driving experience. Whether equipped with the turbocharged four-cylinder EcoBoost engine or the mighty V8 in the GT, the Mustang delivers impressive performance. The interior blends modern technology with classic design elements, and the latest models feature advanced driver-assistance systems. The Mustang remains a symbol of American automotive culture, offering a blend of performance and nostalgia.",
    status: CarStatus.Published,
    rentPerDay: 65,
    address: "198-74 Andover Ave, Buffalo, NY 14215, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403378/gorental/demo/cars/oycmlqwxmknul6ffxbuj.jpg",
        publicId: "gorental/demo/cars/oycmlqwxmknul6ffxbuj",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403375/gorental/demo/cars/uatc1wqn9s7vefzy0eb7.jpg",
        publicId: "gorental/demo/cars/uatc1wqn9s7vefzy0eb7",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403384/gorental/demo/cars/rfm0dmuscisihcs8fwxd.jpg",
        publicId: "gorental/demo/cars/rfm0dmuscisihcs8fwxd",
      },
    ],
    year: 2009,
    power: 4500,
    millage: 95000,
    brand: CarBrand.Ford,
    transmission: CarTransmission.Manual,
    fuelType: CarFuelType.Diesel,
    seats: CarSeats.Five,
    doors: CarDoors.Four,
    category: CarCategory.Hatchback,
  },
  {
    name: "Honda Civic",
    description:
      "The Honda Civic is a compact car known for its reliability, fuel efficiency, and practicality. Available as aCarCategory.Sedan, coupe, orCaCarCategory.Hatchback the Civic offers a versatile range of options to suit various needs. It comes equipped with advanced safety features, a spacious interior, and a user-friendly infotainment system. The Civic’s responsive handling and efficient engines make it a favorite among commuters and driving enthusiasts alike. With its long-standing reputation for durability and low maintenance costs, the Civic is a smart choice for anyone seeking a dependable and enjoyable vehicle.",
    status: CarStatus.Published,
    rentPerDay: 35,
    address: "1399 E Esther St, Orlando, FL 32806, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403586/gorental/demo/cars/qack07k62sapezixwl0t.jpg",
        publicId: "gorental/demo/cars/qack07k62sapezixwl0t",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403587/gorental/demo/cars/tfntmebom3javn6h98qe.avif",
        publicId: "gorental/demo/cars/tfntmebom3javn6h98qe",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403608/gorental/demo/cars/w2lsdwqo3zhzmhe7moun.jpg",
        publicId: "gorental/demo/cars/w2lsdwqo3zhzmhe7moun",
      },
    ],
    year: 2011,
    power: 1800,
    millage: 120000,
    brand: CarBrand.Honda,
    transmission: CarTransmission.Manual,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Seven,
    doors: CarDoors.Four,
    category: CarCategory.Convertible,
  },
  {
    name: "Hyundai Sonata",
    description:
      "The Hyundai Sonata is a midsizeCarCategory.Sedan,that stands out for its sleek design, advanced technology, and value for money. The Sonata offers a comfortable ride, a spacious interior, and a host of standard features, including a large touchscreen, Apple CarPlay, and Android Auto. It’s available with a variety of powertrains, including a fuel-efficient hybrid option. Hyundai’s focus on safety is evident in the Sonata, with a comprehensive suite of driver-assistance features. The Sonata’s blend of style, comfort, and technology makes it a compelling choice in the competitive midsizeCarCategory.Sedan,segment.",
    status: CarStatus.Published,
    rentPerDay: 45,
    address: "3501 Shamrock Ct, Orlando, FL 32806, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403794/gorental/demo/cars/htfvzg0oyda2vtdor4gg.webp",
        publicId: "gorental/demo/cars/htfvzg0oyda2vtdor4gg",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723403794/gorental/demo/cars/ibrizzgguyjqhtcnyqfu.jpg",
        publicId: "gorental/demo/cars/ibrizzgguyjqhtcnyqfu",
      },
    ],
    year: 2017,
    power: 2499,
    millage: 45922,
    brand: CarBrand.Hyundai,
    transmission: CarTransmission.Manual,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Five,
    doors: CarDoors.Four,
    category: CarCategory.Suv,
  },
  {
    name: "Nissan Altima",
    description:
      "The Nissan Altima is a midsizeCarCategory.Sedan,that combines comfort, efficiency, and modern technology. Known for its smooth ride and spacious interior, the Altima is designed to provide a comfortable driving experience for both the driver and passengers. It offers a choice of engines, including a turbocharged option that delivers enhanced performance. The Altima also features Nissan’s advanced driver-assistance systems, making it a safe and convenient vehicle for everyday driving. With its stylish design and practical features, the Altima is a popular choice among families and commuters.",
    status: CarStatus.Published,
    rentPerDay: 32,
    address: "5910 Boca Raton Dr, Dallas, TX 75230, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404025/gorental/demo/cars/djge3pem8mqt6g88yfxf.jpg",
        publicId: "gorental/demo/cars/djge3pem8mqt6g88yfxf",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404025/gorental/demo/cars/u6zferximo1gi5enck1j.jpg",
        publicId: "gorental/demo/cars/u6zferximo1gi5enck1j",
      },
    ],
    year: 2015,
    power: 2299,
    millage: 23433,
    brand: CarBrand.Nissan,
    transmission: CarTransmission.Automatic,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Seven,
    doors: CarDoors.Four,
    category: CarCategory.Suv,
  },
  {
    name: "Toyota Corolla",
    description:
      "The Toyota Corolla is one of the best-selling cars worldwide, known for its reliability, fuel efficiency, and affordability. Available as aCarCategory.Sedan,orCaCarCategory.Hatchback the Corolla offers a practical and comfortable driving experience. It features a straightforward interior design with easy-to-use technology, including a touchscreen infotainment system with Apple CarPlay and Android Auto. The Corolla is equipped with Toyota’s Safety Sense suite, providing a range of driver-assistance features. Its reputation for longevity and low maintenance costs makes the Corolla a top choice for budget-conscious buyers.",
    status: CarStatus.Published,
    rentPerDay: 29,
    address: "6992 Lavendale Ave, Dallas, TX 75230, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404184/gorental/demo/cars/sn8cxt0cnuadncitb8yx.jpg",
        publicId: "gorental/demo/cars/sn8cxt0cnuadncitb8yx",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404185/gorental/demo/cars/pw5jinhnj6ljhpuwejsn.jpg",
        publicId: "gorental/demo/cars/pw5jinhnj6ljhpuwejsn",
      },
    ],
    year: 2010,
    power: 1300,
    millage: 23933,
    brand: CarBrand.Toyota,
    transmission: CarTransmission.Manual,
    fuelType: CarFuelType.Diesel,
    seats: CarSeats.Five,
    doors: CarDoors.Four,
    category: CarCategory.Sedan,
  },
  {
    name: "Audi Q5",
    description:
      "The Audi Q5 is a luxury compactCarCategory.Suvthat blends style, performance, and practicality. It offers a refined driving experience with its smooth ride, powerful engine options, and advanced Quattro all-wheel-drive system. The Q5’s interior is elegantly designed, featuring high-quality materials, comfortable seating, and the latest technology, including a large infotainment screen and a digital instrument cluster. The Audi Q5 is also equipped with a range of safety features and driver-assistance systems, making it a well-rounded choice for those seeking a premiumCarCategory.Suv",
    status: CarStatus.Published,
    rentPerDay: 65,
    address: "5667 Boaz St, Dallas, TX 75209, USA",
    images: [
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404320/gorental/demo/cars/batozhqurlnho0c9ptox.jpg",
        publicId: "gorental/demo/cars/batozhqurlnho0c9ptox",
      },
      {
        url: "https://res.cloudinary.com/shopitnow-udemy/image/upload/v1723404321/gorental/demo/cars/y1wcdb9zar49ywksyoom.jpg",
        publicId: "gorental/demo/cars/y1wcdb9zar49ywksyoom",
      },
    ],
    year: 2017,
    power: 2999,
    millage: 65000,
    brand: CarBrand.Audi,
    transmission: CarTransmission.Automatic,
    fuelType: CarFuelType.Petrol,
    seats: CarSeats.Seven,
    doors: CarDoors.Four,
    category: CarCategory.Suv,
  },
];
