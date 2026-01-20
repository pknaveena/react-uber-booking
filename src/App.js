import React, { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import LocationInput from './components/LocationInput';
import RideSelection from './components/RideSelection';
import PaymentMethod from './components/PaymentMethod';
import BookingConfirmation from './components/BookingConfirmation';
import RideTracking from './components/RideTracking';
import './App.css';

const STEPS = [
  { number: 1, label: 'Location' },
  { number: 2, label: 'Ride' },
  { number: 3, label: 'Payment' },
  { number: 4, label: 'Confirm' }
];

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [booking, setBooking] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  const calculatePrice = (rideType) => {
    const basePrice = 8;
    const perMile = 2.5;
    const distance = Math.random() * 10 + 2;
    return ((basePrice + perMile * distance) * rideType.priceMultiplier).toFixed(2);
  };

  const calculateDistance = () => {
    return (Math.random() * 10 + 2).toFixed(1);
  };

  const handleConfirmBooking = () => {
    const newBooking = {
      id: `UBER-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      pickup,
      dropoff,
      ride: selectedRide,
      price: calculatePrice(selectedRide),
      distance: calculateDistance(),
      estimatedTime: Math.floor(Math.random() * 8 + 3),
      paymentMethod,
      driver: {
        name: ['Alex Johnson', 'Maria Garcia', 'David Chen', 'Sarah Williams'][
          Math.floor(Math.random() * 4)
        ],
        rating: (4.5 + Math.random() * 0.5).toFixed(1),
        vehicle: `${['Toyota', 'Honda', 'Tesla', 'Mercedes'][
          Math.floor(Math.random() * 4)
        ]} ${['Camry', 'Accord', 'Model 3', 'E-Class'][
          Math.floor(Math.random() * 4)
        ]}`,
        plate: `${Math.random()
          .toString(36)
          .substr(2, 3)
          .toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`
      }
    };
    setBooking(newBooking);
    setCurrentStep(4);
  };

  const handleNewRide = () => {
    setCurrentStep(1);
    setPickup('');
    setDropoff('');
    setSelectedRide(null);
    setPaymentMethod('card');
    setBooking(null);
    setIsTracking(false);
  };

  const handleTrackRide = () => {
    setIsTracking(true);
  };

  const handleCompleteRide = () => {
    alert('🎉 Ride completed! Thank you for using Uber.');
    handleNewRide();
  };

  if (isTracking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <RideTracking booking={booking} onComplete={handleCompleteRide} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-black text-white p-6 rounded-t-2xl shadow-lg">
          <h1 className="text-3xl font-bold">Uber</h1>
          <p className="text-gray-300 mt-1">Book your ride in 4 easy steps</p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-b-2xl shadow-lg p-6">
          {currentStep < 4 && <StepIndicator currentStep={currentStep} steps={STEPS} />}

          {/* Step 1: Location Input */}
          {currentStep === 1 && (
            <LocationInput
              pickup={pickup}
              setPickup={setPickup}
              dropoff={dropoff}
              setDropoff={setDropoff}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {/* Step 2: Ride Selection */}
          {currentStep === 2 && (
            <RideSelection
              selectedRide={selectedRide}
              setSelectedRide={setSelectedRide}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}

          {/* Step 3: Payment Method */}
          {currentStep === 3 && (
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
              onNext={handleConfirmBooking}
              onBack={() => setCurrentStep(2)}
            />
          )}

          {/* Step 4: Booking Confirmation */}
          {currentStep === 4 && booking && (
            <BookingConfirmation
              booking={booking}
              onTrackRide={handleTrackRide}
              onNewRide={handleNewRide}
            />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Uber Booking App - React Mini Project</p>
        </div>
      </div>
    </div>
  );
}

export default App;