"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "../../public/logo.png"
import Kia from "../../public/Carens.jpg"
import Dzire from "../../public/Dzire.jpg"
import { useState } from "react"

export default function Home() {
   const [reviewFormData, setReviewFormData] = useState({
    name: "",
    email: "",
    carType: "",
    rating: "5",
    reviewText: "",
  })
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setReviewFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Review submitted:", reviewFormData)
    setReviewSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setReviewSubmitted(false)
      setReviewFormData({
        name: "",
        email: "",
        carType: "",
        rating: "5",
        reviewText: "",
      })
    }, 3000)
  }
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
                  <span>Simar Airline cabs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="font-medium text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/cars" className="font-medium text-gray-800 hover:text-orange-600 transition-colors">
              Our Cars
            </Link>
            <Link href="/booking" className="font-medium text-gray-800 hover:text-orange-600 transition-colors">
              Booking
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Book Now
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Reliable Car Rental Service
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Experience comfort and convenience with Simar Airline cabs. Quality cars at affordable rates.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Book a Car
                  </Link>
                  <Link
                    href="/cars"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    View Our Cars
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Kia Carens"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
                  height="310"
                  src={Kia}
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Our Fleet</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                  Choose Your Perfect Car
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer two excellent car models to meet your travel needs. Both vehicles are well-maintained and
                  ready for your journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <Image
                  alt="Kia Carens"
                  className="aspect-video w-full object-cover"
                  height="225"
                  src={Kia}
                  width="400"
                />
                <div className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">Kia Carens</h3>
                    <p className="text-sm text-gray-600">
                      Spacious 7-seater MPV perfect for family trips and group travel.
                    </p>
                    <div className="flex items-center gap-4">
                    <a
    href="tel:9760600013" 
                        className="ml-auto inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
                <Image
                  alt="Swift Dzire"
                  className="aspect-video w-full object-cover"
                  height="225"
                  src={Dzire}
                  width="400"
                />
                <div className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900">Swift Dzire</h3>
                    <p className="text-sm text-gray-600">
                      Compact sedan with excellent fuel efficiency, ideal for city travel.
                    </p>
                    <div className="flex items-center gap-4">
                    <a
    href="tel:9760600013" 
                        className="ml-auto inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                href="/cars"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                View Car Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">How It Works</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Renting a car with Simar Airline cabs is quick and easy. Follow these simple steps to get on the
                  road.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900">Choose Your Car</h3>
                <p className="text-gray-600">Select between our Kia Carens or Swift Dzire based on your needs.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900">Book Your Dates</h3>
                <p className="text-gray-600">Select your pickup and return dates and complete the booking form.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-3xl font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enjoy Your Ride</h3>
                <p className="text-gray-600">Pick up your car at the designated location and enjoy your journey.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600">
                    &quot;The Kia Carens was perfect for our family trip. Very spacious and comfortable. Will definitely
                      use again!&quot;
                    </p>
                    <div className="font-medium text-gray-900">- Rajesh S.</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600">
                    &quot;Swift Dzire was very fuel efficient and perfect for city driving. The booking process was smooth
                      and hassle-free.&quot;
                    </p>
                    <div className="font-medium text-gray-900">- Priya M.</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600">
                    &quot;Great service and well-maintained cars. The team at Simar Airline cabs was very
                      professional.&quot;
                    </p>
                    <div className="font-medium text-gray-900">- Amit K.</div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </section>
         {/* Review Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">
                  Share Your Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">Leave a Review</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your feedback helps us improve our service and helps other customers make informed decisions.
                </p>
              </div>
            </div>

          <div className="mx-auto max-w-3xl p-4 sm:p-6 lg:p-8">
  {reviewSubmitted ? (
    <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You for Your Review!</h3>
      <p className="text-green-700 text-sm sm:text-base">We appreciate you taking the time to share your experience with us.</p>
    </div>
  ) : (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg transition-all">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Leave a Review</h2>
      <form onSubmit={handleReviewSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={reviewFormData.name}
              onChange={handleReviewChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={reviewFormData.email}
              onChange={handleReviewChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="carType" className="block text-sm font-medium text-gray-700 mb-1">Car You Rented</label>
            <select
              id="carType"
              name="carType"
              value={reviewFormData.carType}
              onChange={handleReviewChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            >
              <option value="">Select a car</option>
              <option value="Kia Carens">Kia Carens</option>
              <option value="Swift Dzire">Swift Dzire</option>
            </select>
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Your Rating</label>
            <select
              id="rating"
              name="rating"
              value={reviewFormData.rating}
              onChange={handleReviewChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            >
              <option value="5">5 Stars - Excellent</option>
              <option value="4">4 Stars - Very Good</option>
              <option value="3">3 Stars - Good</option>
              <option value="2">2 Stars - Fair</option>
              <option value="1">1 Star - Poor</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">Your Review</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={reviewFormData.reviewText}
            onChange={handleReviewChange}
            required
            rows={4}
            className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            placeholder="Share your experience with our service..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-5 py-2 text-sm font-medium text-white shadow hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Submit Review
          </button>
        </div>
      </form>
    </div>
  )}
</div>

          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-10 bg-orange-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                    Ready to Hit the Road?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Book your car today and enjoy the freedom of the open road. We offer competitive rates, flexible
                    booking options, and well-maintained vehicles.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-orange-600 px-5 py-2.5 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Book Now
                  </Link>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
  <div className="w-full rounded-lg border border-orange-200 bg-white shadow-md overflow-hidden">
    <div className="p-6 border-b border-orange-100">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-0.5 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <h4 className="font-medium text-gray-900">Phone</h4>
              <p className="text-gray-700 font-medium">9760600013, 9458508004</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-0.5 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h4 className="font-medium text-gray-900">Email</h4>
              <p className="text-gray-700">bookings@simartourtravels.com</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">
          {/* Main Office */}
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-0.5 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <h4 className="font-medium text-gray-900">Main Office</h4>
              <p className="text-gray-700">Sharda Nagar ,Saharanpur, Uttar Pradesh 247001</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-0.5 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h4 className="font-medium text-gray-900">Business Hours</h4>
              <p className="text-gray-700">Mon-Sun: 24 x 7</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Map Section */}
    <div className="h-64 w-full">
      <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13825.978816999275!2d77.51231774115851!3d29.965209699412675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390eeafb1684a8b1%3A0x92964b2b64ef3765!2sSharda%20Nagar%2C%20Saharanpur%2C%20Uttar%20Pradesh%20247001!5e0!3m2!1sen!2sin!4v1746077790053!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Simar Airline cabs Location"
        aria-label="Map showing the location of Simar Airline cabs office"
      ></iframe>
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
            <p className="text-sm text-gray-600">© 2025 Simar Airline cabs. All rights reserved.</p>
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

