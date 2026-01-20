import React from 'react';
import { CheckCircle, MapPin, Navigation, DollarSign, User, Star, Phone, Car } from 'lucide-react';
const BookingConfirmation = ({ booking, onTrackRide, onNewRide }) => {
  return (
    <div className="space-y-6">
      {/* Success Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4">
          <CheckCircle size={48} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Booking Confirmed!</h2>
        <p className="text-gray-600 mt-2">Your ride has been booked successfully</p>
      </div>
      {/* Booking Details */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-4">
        <div>
          <p className="text-sm text-gray-600">Booking ID</p>
          <p className="font-bold text-lg">{booking.id}</p>
        </div>
        <div className="border-t pt-4">
          <div className="flex items-start space-x-3 mb-3">
            <MapPin className="text-green-600 mt-1" size={20} />
            <div>
              <p className="text-sm text-gray-600">Pickup</p>
              <p className="font-semibold">{booking.pickup}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Navigation className="text-red-600 mt-1" size={20} />
            <div>
              <p className="text-sm text-gray-600">Dropoff</p>
              <p className="font-semibold">{booking.dropoff}</p>
            </div>
          </div>
        </div>
        <div className="border-t pt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Ride Type</p>
            <p className="font-semibold">{booking.ride.icon} {booking.ride.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Distance</p>
            <p className="font-semibold">{booking.distance} miles</p>
          </div>
        </div>
        <div className="border-t pt-4">
          <p className="text-sm text-gray-600">Total Fare</p>
          <p className="font-bold text-2xl text-green-600">${booking.price}</p>
        </div>
      </div>
      {/* Driver Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Driver Details</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <p className="font-bold text-lg">{booking.driver.name}</p>
              <div className="flex items-center space-x-1">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="font-semibold">{booking.driver.rating}</span>
              </div>
            </div>
          </div>
          <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all">
            <Phone size={20} className="text-white" />
          </button>
        </div>
        <div className="bg-white rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car size={20} className="text-gray-600" />
              <span className="font-semibold">{booking.driver.vehicle}</span>
            </div>
            <span className="font-bold">{booking.driver.plate}</span>
          </div>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={onTrackRide}
          className="w-full py-4 rounded-xl font-semibold bg-black text-white hover:bg-gray-800 transition-all"
        >
          Track Your Ride
        </button>
        <button
          onClick={onNewRide}
          className="w-full py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all"
        >
          Book Another Ride
        </button>
      </div>
    </div>
  );
};
export default BookingConfirmation;