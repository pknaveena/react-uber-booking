import React, { useState, useEffect } from 'react';
import { Navigation, Clock, Phone, MessageCircle, X } from 'lucide-react';

const RideTracking = ({ booking, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Driver on the way');
  const [timeRemaining, setTimeRemaining] = useState(booking.estimatedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('Arrived at destination');
          return 100;
        }
        
        const newProgress = prev + 2;
        
        if (newProgress >= 30 && newProgress < 35) {
          setStatus('Driver arriving soon');
        } else if (newProgress >= 50 && newProgress < 55) {
          setStatus('Trip in progress');
        } else if (newProgress >= 90) {
          setStatus('Arriving at destination');
        }
        
        return newProgress;
      });

      setTimeRemaining((prev) => Math.max(0, prev - 0.1));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Track Your Ride</h2>
        <button
          onClick={onComplete}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-all"
        >
          <X size={20} />
        </button>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8 relative overflow-hidden h-64">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Navigation size={48} className="text-blue-600 mx-auto mb-2 animate-pulse" />
            <p className="font-semibold text-gray-700">Tracking your ride...</p>
          </div>
        </div>
        {/* Animated route line */}
        <div
          className="absolute bottom-0 left-0 h-2 bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Status */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-bold text-xl">{status}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">ETA</p>
            <p className="font-bold text-xl flex items-center">
              <Clock size={20} className="mr-1" />
              {Math.ceil(timeRemaining)} min
            </p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2 text-center">{progress.toFixed(0)}% Complete</p>
      </div>

      {/* Driver Card */}
      <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {booking.driver.name.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-lg">{booking.driver.name}</p>
              <p className="text-gray-600">{booking.driver.vehicle}</p>
              <p className="font-semibold">{booking.driver.plate}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all">
              <Phone size={20} className="text-white" />
            </button>
            <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all">
              <MessageCircle size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Trip Details */}
      <div className="bg-gray-50 rounded-xl p-6 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Booking ID</span>
          <span className="font-semibold">{booking.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Distance</span>
          <span className="font-semibold">{booking.distance} miles</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Fare</span>
          <span className="font-semibold text-green-600">${booking.price}</span>
        </div>
      </div>

      {progress >= 100 && (
        <button
          onClick={onComplete}
          className="w-full py-4 rounded-xl font-semibold bg-green-500 text-white hover:bg-green-600 transition-all"
        >
          Complete Ride
        </button>
      )}
    </div>
  );
};

export default RideTracking;