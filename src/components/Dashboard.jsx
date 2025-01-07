// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Dashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/bookings/');
//       if (!response.ok) {
//         throw new Error('Failed to fetch bookings');
//       }
//       const data = await response.json();
//       setBookings(data);
//       setLoading(false);
//     } catch (error) {
//       setError(error.message);
//       setLoading(false);
//     }
//   };

//   const handleBookAppointment = () => {
//     navigate('/book-appointment');
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Dashboard</h1>
//       <button 
//         onClick={handleBookAppointment}
//         className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
//       >
//         Book New Appointment
//       </button>
//       <h2 className="text-2xl font-semibold mt-5 mb-3">Your Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>You have no bookings.</p>
//       ) : (
//         <ul>
//           {bookings.map((booking) => (
//             <li key={booking.id} className="mb-2 p-2 bg-slate-100 rounded">
//               Date: {booking.date}, Time: {booking.time}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Dashboard() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   const fetchBookings = () => {
//     // Retrieve bookings from localStorage
//     const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
//     setBookings(storedBookings);
//     setLoading(false);
//   };

//   const handleBookAppointment = () => {
//     navigate('/book-appointment');
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Dashboard</h1>
//       <button 
//         onClick={handleBookAppointment}
//         className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
//       >
//         Book New Appointment
//       </button>
//       <h2 className="text-2xl font-semibold mt-5 mb-3">Your Bookings</h2>
//       {bookings.length === 0 ? (
//         <p>You have no bookings.</p>
//       ) : (
//         <ul>
//           {bookings.map((booking) => (
//             <li key={booking.id} className="mb-2 p-2 bg-slate-100 rounded">
//               Date: {booking.date}, Time: {booking.time}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchUserAndBookings();
//   }, []);

//   const fetchUserAndBookings = () => {
//     // Simulate fetching user data from localStorage
//     const userData = JSON.parse(localStorage.getItem('user') || '{}');
//     setUser(userData);

//     // Retrieve bookings from localStorage
//     const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
//     setBookings(storedBookings);
//     setLoading(false);
//   };

//   const handleBookAppointment = () => {
//     navigate('/book-appointment');
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-4xl text-center font-bold my-8 text-green-600">
//         Welcome, {user?.name || 'Patient'}!
//       </h1>
      
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Your Dental Health Summary</h2>
//         <p className="mb-2">Next checkup due: {user?.nextCheckup || 'Not scheduled'}</p>
//         <p className="mb-2">Last visit: {user?.lastVisit || 'N/A'}</p>
//         <p>Outstanding balance: ${user?.balance || '0.00'}</p>
//       </div>

//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-semibold">Your Upcoming Appointments</h2>
//         <button 
//           onClick={handleBookAppointment}
//           className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Book New Appointment
//         </button>
//       </div>

//       {bookings.length === 0 ? (
//         <p className="text-center text-gray-600">You have no upcoming appointments.</p>
//       ) : (
//         <ul className="space-y-4">
//           {bookings.map((booking) => (
//             <li key={booking.id} className="bg-white shadow rounded-lg p-4">
//               <div className="flex justify-between items-center">
//                 <div>
//                   <p className="font-semibold">{booking.treatmentType || 'Dental Appointment'}</p>
//                   <p className="text-gray-600">Date: {formatDate(booking.date)}</p>
//                   <p className="text-gray-600">Time: {booking.time}</p>
//                 </div>
//                 <button className="text-red-500 hover:text-red-700">
//                   Cancel
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}

//       <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold mb-4">Dental Health Tips</h2>
//         <ul className="list-disc pl-5 space-y-2">
//           <li>Brush your teeth twice a day for at least two minutes each time.</li>
//           <li>Floss daily to remove plaque between teeth.</li>
//           <li>Use fluoride toothpaste to prevent cavities.</li>
//           <li>Limit sugary snacks and drinks.</li>
//           <li>Schedule regular dental check-ups every six months.</li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserAndBookings();
    fetchUserProfile(); // Fetch user profile when component mounts
  }, []);

  const fetchUserAndBookings = async () => {
    try {
      // Simulate fetching user data from localStorage
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      setUser(userData);

      // Retrieve the token from localStorage (or any other storage you use)
      const token = localStorage.getItem('token');

      // Fetch bookings from the Django backend
      const response = await fetch('http://127.0.0.1:8000/user-auth/booking/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch bookings');
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/user-auth/profile/', {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch user profile');
      const profileData = await response.json();
      setProfile(profileData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleBookAppointment = () => {
    navigate('/book-appointment');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl text-center font-bold my-8 text-green-600">
        Welcome, {profile?.first_name || 'Patient'}!
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Profile Information</h2>
        <p className="mb-2">Name: {profile?.first_name} {profile?.last_name}</p>
        <p className="mb-2">Email: {profile?.email}</p>
        <p className="mb-2">Phone Number: {profile?.phone_number || 'N/A'}</p>
        <p>Location: {profile?.location || 'N/A'}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Dental Health Summary</h2>
        <p className="mb-2">Next checkup due: {user?.nextCheckup || 'Not scheduled'}</p>
        <p className="mb-2">Last visit: {user?.lastVisit || 'N/A'}</p>
        <p>Outstanding balance: ${user?.balance || '0.00'}</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Your Upcoming Appointments</h2>
        <button 
          onClick={handleBookAppointment}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Book New Appointment
        </button>
      </div>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">You have no upcoming appointments.</p>
      ) : (
        <ul className="space-y-4">
          {bookings.map((booking) => (
            <li key={booking.id} className="bg-white shadow rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{booking.treatmentType || 'Dental Appointment'}</p>
                  <p className="text-gray-600">Date: {formatDate(booking.date)}</p>
                  <p className="text-gray-600">Time: {booking.time}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  Cancel
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Dental Health Tips</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Brush your teeth twice a day for at least two minutes each time.</li>
          <li>Floss daily to remove plaque between teeth.</li>
          <li>Use fluoride toothpaste to prevent cavities.</li>
          <li>Limit sugary snacks and drinks.</li>
          <li>Schedule regular dental check-ups every six months.</li>
        </ul>
      </div>
    </div>
  );
}
