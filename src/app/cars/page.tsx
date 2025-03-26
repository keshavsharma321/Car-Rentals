"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
export default function CarsPage() {
  const [activeTab, setActiveTab] = useState({
    carens: "features",
    dzire: "features",
  })

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      alt="Kia Carens"
                      className="h-full w-full object-cover"
                      height="400"
                      src="/placeholder.svg?height=800&width=1200"
                      width="600"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-gray-900">Kia Carens</h2>
                      <p className="text-gray-600">
                        The Kia Carens is a spacious 7-seater MPV that combines comfort, style, and practicality.
                        Perfect for family trips, group travel, or when you need extra space.
                      </p>
                      <div className="border-b border-gray-200">
                        <div className="flex flex-wrap -mb-px">
                          <button
                            onClick={() => setActiveTab({ ...activeTab, carens: "features" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.carens === "features" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Features
                          </button>
                          <button
                            onClick={() => setActiveTab({ ...activeTab, carens: "specs" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.carens === "specs" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Specifications
                          </button>
                          <button
                            onClick={() => setActiveTab({ ...activeTab, carens: "rates" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.carens === "rates" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Rates
                          </button>
                        </div>
                      </div>

                      {activeTab.carens === "features" && (
                        <div className="space-y-4 mt-4">
                          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">7 Seats</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Air Conditioning</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Power Steering</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Power Windows</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Bluetooth Connectivity</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Touchscreen Infotainment</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Rear Parking Camera</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">ABS with EBD</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {activeTab.carens === "specs" && (
                        <div className="space-y-4 mt-4">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Engine</span>
                              <span className="text-gray-600">1.5L Petrol/Diesel</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Transmission</span>
                              <span className="text-gray-600">Manual/Automatic</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Fuel Efficiency</span>
                              <span className="text-gray-600">15-20 km/l</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Boot Space</span>
                              <span className="text-gray-600">Large</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Seating Capacity</span>
                              <span className="text-gray-600">7 Persons</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {activeTab.carens === "rates" && (
                        <div className="space-y-4 mt-4">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Daily Rate</span>
                              <span className="text-gray-600">₹2,500/day</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Weekly Rate</span>
                              <span className="text-gray-600">₹15,000/week</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Monthly Rate</span>
                              <span className="text-gray-600">₹55,000/month</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Security Deposit</span>
                              <span className="text-gray-600">₹5,000 (refundable)</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Extra KM Charge</span>
                              <span className="text-gray-600">₹12/km</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      <div className="pt-4">
                        <Link
                          href="/booking"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
                        >
                          Book This Car
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      alt="Swift Dzire"
                      className="h-full w-full object-cover"
                      height="400"
                      src="/placeholder.svg?height=800&width=1200"
                      width="600"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold text-gray-900">Swift Dzire</h2>
                      <p className="text-gray-600">
                        The Swift Dzire is a compact sedan that offers excellent fuel efficiency and comfortable city
                        driving. Ideal for business trips, small families, or solo travelers.
                      </p>
                      <div className="border-b border-gray-200">
                        <div className="flex flex-wrap -mb-px">
                          <button
                            onClick={() => setActiveTab({ ...activeTab, dzire: "features" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.dzire === "features" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Features
                          </button>
                          <button
                            onClick={() => setActiveTab({ ...activeTab, dzire: "specs" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.dzire === "specs" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Specifications
                          </button>
                          <button
                            onClick={() => setActiveTab({ ...activeTab, dzire: "rates" })}
                            className={`inline-block p-4 border-b-2 ${activeTab.dzire === "rates" ? "border-orange-600 text-orange-600" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"} rounded-t-lg`}
                          >
                            Rates
                          </button>
                        </div>
                      </div>

                      {activeTab.dzire === "features" && (
                        <div className="space-y-4 mt-4">
                          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">5 Seats</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Air Conditioning</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Power Steering</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Power Windows</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Bluetooth Connectivity</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Music System</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">Rear Parking Sensors</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-2 w-2 rounded-full bg-orange-600"></div>
                              <span className="text-gray-700">ABS with EBD</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {activeTab.dzire === "specs" && (
                        <div className="space-y-4 mt-4">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Engine</span>
                              <span className="text-gray-600">1.2L Petrol/Diesel</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Transmission</span>
                              <span className="text-gray-600">Manual/Automatic</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Fuel Efficiency</span>
                              <span className="text-gray-600">20-25 km/l</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Boot Space</span>
                              <span className="text-gray-600">Medium</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Seating Capacity</span>
                              <span className="text-gray-600">5 Persons</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {activeTab.dzire === "rates" && (
                        <div className="space-y-4 mt-4">
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Daily Rate</span>
                              <span className="text-gray-600">₹1,800/day</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Weekly Rate</span>
                              <span className="text-gray-600">₹11,000/week</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Monthly Rate</span>
                              <span className="text-gray-600">₹40,000/month</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Security Deposit</span>
                              <span className="text-gray-600">₹3,000 (refundable)</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="font-medium text-gray-900">Extra KM Charge</span>
                              <span className="text-gray-600">₹10/km</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      <div className="pt-4">
                        <Link
                          href="/booking"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full md:w-auto"
                        >
                          Book This Car
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

