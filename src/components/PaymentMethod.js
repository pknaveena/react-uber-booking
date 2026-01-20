import React from 'react';
import { PAYMENT_METHODS } from '../data/rideData';

const PaymentMethod = ({ paymentMethod, setPaymentMethod, onNext, onBack }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>

      <div className="space-y-3">
        {PAYMENT_METHODS.map((method) => (
          <div
            key={method.id}
            onClick={() => setPaymentMethod(method.id)}
            className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
              paymentMethod === method.id
                ? 'border-black bg-gray-50'
                : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{method.icon}</span>
                <div>
                  <h3 className="font-bold">{method.name}</h3>
                  {method.last4 && (
                    <p className="text-sm text-gray-600">•••• {method.last4}</p>
                  )}
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  paymentMethod === method.id
                    ? 'border-black bg-black'
                    : 'border-gray-300'
                }`}
              >
                {paymentMethod === method.id && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
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
          className="flex-1 py-4 rounded-xl font-semibold bg-black text-white hover:bg-gray-800 transition-all"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;