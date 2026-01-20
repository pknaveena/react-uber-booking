import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { SAMPLE_LOCATIONS } from '../data/rideData';

const LocationInput = ({ pickup, setPickup, dropoff, setDropoff, onNext }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Where to?</h2>
      
      {/* Pickup Location */}
      <div className="relative">
        <MapPin className="absolute left-4 top-4 text-green-600" size={20} />
        <input
          type="text"
          placeholder="Enter pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          list="pickup-suggestions"
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all"
        />
        <datalist id="pickup-suggestions">
          {SAMPLE_LOCATIONS.pickup.map((loc) => (
            <option key={loc} value={loc} />
          ))}
        </datalist>
      </div>

      {/* Dropoff Location */}
      <div className="relative">
        <Navigation className="absolute left-4 top-4 text-red-600" size={20} />
        <input
          type="text"
          placeholder="Enter dropoff location"
          value={dropoff}
          onChange={(e) => setDropoff(e.target.value)}
          list="dropoff-suggestions"
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-black focus:outline-none transition-all"
        />
        <datalist id="dropoff-suggestions">
          {SAMPLE_LOCATIONS.dropoff.map((loc) => (
            <option key={loc} value={loc} />
          ))}
        </datalist>
      </div>

      {/* Info Display */}
      {pickup && dropoff && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-1">
              <p className="text-sm text-gray-600">From</p>
              <p className="font-semibold text-gray-800">{pickup}</p>
              <p className="text-sm text-gray-600 mt-2">To</p>
              <p className="font-semibold text-gray-800">{dropoff}</p>
            </div>
          </div>
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={!pickup || !dropoff}
        className={`w-full py-4 rounded-xl font-semibold transition-all ${
          pickup && dropoff
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        Choose a Ride
      </button>
    </div>
  );
};

export default LocationInput;