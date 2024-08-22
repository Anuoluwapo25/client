import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function BookingConfirmation() {
  const location = useLocation();
  const booking = location.state?.booking;

  if (!booking) {
    return <div>No booking information available.</div>;
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Booking Confirmed</h1>
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-5" role="alert">
        <p className="font-bold">Success!</p>
        <p>Your appointment has been booked successfully.</p>
      </div>
      <div className="mb-5">
        <h2 className="text-xl font-semibold mb-2">Booking Details:</h2>
        <p>Date: {booking.date}</p>
        <p>Time: {booking.time}</p>
        {/* Add other booking details as needed */}
      </div>
      <Link to="/dashboard" className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 inline-block">
        Return to Dashboard
      </Link>
    </div>
  );
}