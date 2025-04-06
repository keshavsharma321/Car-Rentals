"use client"

import Link from "next/link"
import { StaticImageData } from "next/image";
import Image from "next/image"
import logo from "../../../public/logo.png"
import React from "react";
import Kia from "../../../public/Carens.jpg"
import Dzire from "../../../public/Dzire.jpg"
import Innova from "../../../public/Innova.jpg"
import Tempo from "../../../public/Tempo.jpeg"
import Ciaz from "../../../public/ciaz.jpg"
import Urbania from "../../../public/urbania.jpg"


export default function CarsPage() {
  type Car = {
    id: string;
    name: string;
    image: StaticImageData;
    description: string;
    features: string[];
    specs: Record<string, string>;
  };
  
  const cars: Car[] = [
    {
      id: "carens",
      name: "Kia Carens",
      image: Kia,
      description:
        "The Kia Carens is a spacious 7-seater MPV that combines comfort, style, and practicality.",
      features: [
        "7 Seats",
        "Air Conditioning",
        "Power Steering",
        "Power Windows",
        "Bluetooth Connectivity",
        "Touchscreen Infotainment",
        "Rear Parking Camera",
        "ABS with EBD",
      ],
      specs: {
        Engine: "1.5L Petrol/Diesel",
        Transmission: "Manual/Automatic",
        "Fuel Efficiency": "15-20 km/l",
        "Boot Space": "Large",
        "Seating Capacity": "7 Persons",
      },
    },
    {
      id: "dzire",
      name: "Maruti Dzire",
      image: Dzire,
      description:
        "The Dzire is a compact sedan perfect for city rides and comfortable family trips.",
      features: [
        "5 Seats",
        "Air Conditioning",
        "Power Steering",
        "Power Windows",
        "Bluetooth Audio",
        "Rear AC Vent",
        "Rear Parking Sensors",
        "ABS with EBD",
      ],
      specs: {
        Engine: "1.2L Petrol/CNG",
        Transmission: "Manual/Automatic",
        "Fuel Efficiency": "22-24 km/l",
        "Boot Space": "Good",
        "Seating Capacity": "5 Persons",
      },
    },
    {
      id: "ciaz",
      name: "Maruti Ciaz",
      image: Ciaz,
      description:
        "The Maruti Ciaz is a premium sedan that offers a smooth ride, spacious interiors, and smart hybrid technology.",
      features: [
        "5 Seats",
        "Air Conditioning",
        "Push Button Start",
        "Cruise Control",
        "SmartPlay Infotainment",
        "Reverse Camera",
        "ABS with EBD",
        "Dual Airbags",
      ],
      specs: {
        Engine: "1.5L Petrol Smart Hybrid",
        Transmission: "Manual/Automatic",
        "Fuel Efficiency": "20-21 km/l",
        "Boot Space": "510 L",
        "Seating Capacity": "5 Persons",
      },
    },
    {
      id: "innova",
      name: "Toyota Innova Crysta",
      image: Innova,
      description:
        "The Toyota Innova Crysta is a premium MPV ideal for family and long-distance travel with luxurious comfort.",
      features: [
        "7/8 Seats",
        "Dual-Zone AC",
        "Touchscreen Infotainment",
        "Captain Seats",
        "Rear Parking Camera",
        "Cruise Control",
        "ABS with EBD",
        "7 Airbags",
      ],
      specs: {
        Engine: "2.4L Diesel / 2.7L Petrol",
        Transmission: "Manual/Automatic",
        "Fuel Efficiency": "11-15 km/l",
        "Boot Space": "300-500 L (Depending on seating)",
        "Seating Capacity": "7-8 Persons",
      },
    },
    {
      id: "traveller",
      name: "Force Traveller Van",
      image: Tempo,
      description:
        "The Force Traveller Van is designed for group travel and commercial transport, offering durability and ample space.",
      features: [
        "9 to 26 Seats",
        "High Roof",
        "Air Conditioning (Optional)",
        "Power Steering",
        "Sliding Doors",
        "Sturdy Build",
        "ABS",
        "High Ground Clearance",
      ],
      specs: {
        Engine: "2.6L Diesel",
        Transmission: "Manual",
        "Fuel Efficiency": "10-13 km/l",
        "Boot Space": "Very Large (Flexible)",
        "Seating Capacity": "9-26 Persons",
      },
    },
    {
      id: "urbania",
      name: "Force Urbania",
      image: Urbania,
      description:
        "The Urbania is a next-gen premium van from Force Motors, designed with a focus on modern design, safety, and comfort.",
      features: [
        "9 to 17 Seats",
        "Independent Front Suspension",
        "ABS with EBD",
        "Dual Airbags",
        "Stylish Cabin",
        "Touchscreen System",
        "Rear AC Vents",
        "Tilt and Telescopic Steering",
      ],
      specs: {
        Engine: "2.6L FM CR ED Diesel",
        Transmission: "Manual",
        "Fuel Efficiency": "12-14 km/l",
        "Boot Space": "Flexible Based on Configuration",
        "Seating Capacity": "9-17 Persons",
      },
    },
  ];
  
  
  const [activeTab, setActiveTab] = React.useState<Record<string, string>>(
    () =>
      cars.reduce((acc, car) => {
        acc[car.id] = "features";
        return acc;
      }, {} as Record<string, string>)
  );

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-800">
          <Image
                  alt="Logo"
                  className="h-12 w-12"
                  src={logo}
                />          
            <span>Simar Tour and Travels</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-gray-800 hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/cars" className="font-medium text-gray-800 text-orange-600 transition-colors">
              Our Cars
            </Link>
            <Link href="/booking" className="font-medium hover:text-orange-600 transition-colors">
              Booking
            </Link>
            
            
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Book Now
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Our Cars</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl">
                  Explore our fleet of well-maintained vehicles for your next journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12">
             

           {cars.map((car)=>(
            <div key={car.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
              <Image
                  alt={car.name}
                  className="h-full w-full object-cover"
                  height={400}
                  src={car.image}
                  width={600}
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{car.name}</h2>
                <p className="text-gray-600 mt-2">{car.description}</p>
                <div className="border-b border-gray-200 mt-4">
                  <div className="flex flex-wrap -mb-px">
                    {["features", "specs"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() =>
                          setActiveTab((prev) => ({ ...prev, [car.id]: tab }))
                        }
                        className={`inline-block p-4 border-b-2 ${
                          activeTab[car.id] === tab
                            ? "border-orange-600 text-orange-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                        } rounded-t-lg`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {activeTab[car.id] === "features" && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-orange-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab[car.id] === "specs" && (
                  <ul className="space-y-2 mt-4">
                    {Object.entries(car.specs).map(([label, value], idx) => (
                      <li key={idx} className="flex justify-between">
                        <span className="font-medium text-gray-900">{label}</span>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                )}

                
                 

<div className="pt-4">
  <a
    href="tel:9760600013" 
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
  >
    Book This Car
  </a>
</div>

                </div>
              </div>
            </div>
          </div>
           ))}  
            
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-white py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h8m-8 5h8m-4 5v-5m-8 9h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-gray-600">© 2025 Simar Tour and Travels. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

