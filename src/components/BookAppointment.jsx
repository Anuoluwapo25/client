// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function BookAppointment() {
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     // Add other fields as needed
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/bookings/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add authorization header if required
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to book appointment');
//       }

//       const data = await response.json();
//       navigate('/booking-confirmation', { state: { booking: data } });
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Book Appointment</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <input
//           type="date"
//           id="date"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         />
//         <input
//           type="time"
//           id="time"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         />
//         {/* Add other fields as needed */}
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
//         >
//           {loading ? 'Booking...' : 'Book Appointment'}
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-5">{error}</p>}
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export default function BookAppointment() {
//   const [formData, setFormData] = useState({
//     service: '',
//     dentist: '',
//     date: '',
//     time: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch('http://127.0.0.1:8000/user-auth/booking/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add authorization header if required
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to book appointment');
//       }

//       const data = await response.json();
//       navigate('/booking-confirmation', { state: { booking: data } });
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7">Book Appointment</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//         <select
//           id="options"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         >
//           <option value="">Select a Sevice</option>
//           <option value="General Dentistry">General Dentistry</option>
//           <option value=" Preventive Dentistry">Preventive Dentistry</option>
//           <option value="Teeth Whitenening">Teeth Whitenening</option>
//           <option value="Braces">Braces</option>
//           <option value="Dentures">Dentures</option>
//           <option value="Periodontics">Periodontics</option>
//           <option value="Oral Sedation">Oral Sedation</option>
//         </select>

//        <select
//           id="options"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         >
//           <option value="">Select a Dentist</option>
//           <option value="Doctor1">Dr. Becky</option>
//           <option value="Doctor1">Dr. Tems</option>
//           <option value="Doctor1">Dr. Kobby</option>
//         </select>
//         <input
//           type="date"
//           id="date"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         />
        
//         <input
//           type="time"
//           id="time"
//           onChange={handleChange}
//           className="bg-slate-100 p-3 rounded-lg"
//           required
//         />
//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
//         >
//           {loading ? 'Booking...' : 'Book Appointment'}
//         </button>
//       </form>
//       {error && <p className="text-red-500 mt-5">{error}</p>}
//     </div>
//   );
// }

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    doctor: '', 
    service: '',       
    date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,  // Use 'name' attribute for binding
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://127.0.0.1:8000/booking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      const data = await response.json();
      navigate('/booking-confirmation', { state: { booking: data } });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Book Appointment</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        {/* <input
        //   type="text"
        //   name="name" 
        //   onChange={handleChange}
        //   placeholder="Enter your name"
        //   // className="bg-slate-100 p-3 rounded-lg"
        //   // required
        // // / */}

        <select
          name="service"  // Match with the backend expectation
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
          required
          value={formData.service}
        >
          <option value="">Select a Service</option>
          <option value="General Dentistry">General Dentistry</option>
          <option value="Preventive Dentistry">Preventive Dentistry</option>
          <option value="Teeth Whitening">Teeth Whitening</option>
          <option value="Braces">Braces</option>
          <option value="Dentures">Dentures</option>
          <option value="Periodontics">Periodontics</option>
          <option value="Oral Sedation">Oral Sedation</option>
        </select>

        <select
          name="doctor"  // Match with the backend expectation
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
          required
          value={formData.doctor}
        >
          <option value="">Select a Dentist</option>
          <option value="Doctor1">Dr. Becky</option>
          <option value="Doctor2">Dr. Tems</option>
          <option value="Doctor3">Dr. Kobby</option>
        </select>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
          required
          value={formData.date}
        />

        {/* <input
          type="time"
          name="time"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
          required
          value={formData.time}
        /> */}
        
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? 'Booking...' : 'Book Appointment'}
        </button>
      </form>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
