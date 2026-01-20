import React from 'react';
import { User, Clock, DollarSign } from 'lucide-react';
import { RIDE_TYPES } from '../data/rideData';

const RideSelection = ({ selectedRide, setSelectedRide, onNext, onBack }) => {
  const calculatePrice = (rideType) => {
    const basePrice = 8;
    const perMile = 2.5;
    const distance = Math.random() * 10 + 2;
    return ((basePrice + perMile * distance) * rideType.priceMultiplier).toFixed(2);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Choose a ride</h2>

      <div className="space-y-3">
        {RIDE_TYPES.map((ride) => (
          <div
            key={ride.id}
            onClick={() => setSelectedRide(ride)}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
              selectedRide?.id === ride.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{ride.icon}</span>
                <div>
                  <h3 className="font-bold text-lg">{ride.name}</h3>
                  <p className="text-sm text-gray-600">{ride.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-xs text-gray-500">
                      <User size={14} className="mr-1" />
                      {ride.capacity}
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {ride.eta}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center font-bold text-xl">
                  <DollarSign size={20} />
                  {calculatePrice(ride)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!selectedRide}
          className={`flex-1 py-4 rounded-xl font-semibold transition-all ${
            selectedRide
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Select Payment
        </button>
      </div>
    </div>
  );
};

export default RideSelection;