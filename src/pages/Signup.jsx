
// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await fetch("http://127.0.0.1:8000/user-auth/register/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       setLoading(false);

//       if (data.success === false) {
//         setError(true);

//         return;
//       }
//       navigate('/signin')
      
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl text-center font-semibold my-7"> Sign up </h1>

//       <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           id="name"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="Username"
//           id="username"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="Email"
//           id="email"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           placeholder="Phone number"
//           id="phone_number"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           id="password"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           id="location"
//           className="bg-slate-100 p-3 rounded-lg "
//           onChange={handleChange}
//         />

//         <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity80 cursor-pointer">
//           {loading ? "Loading..." : "Sign up"}
//         </button>
//       </form>

//       <div className="flex flex-row gap-2 mt-5">
//         <p>Have an account?</p>
//         <Link to="/signin">
//           <span className="text-blue-500">Sign in</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="first_name"
          id="first_name"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="tel"
          placeholder="phone_number"
          id="phone_number"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="country"
          id="country"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="state"
          id="state"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="address"
          id="address"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />  

        <select
          id="account_type"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        >
          <option value="" disabled selected>
            Select Account Type
          </option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <input
          type="text"
          placeholder="Enter Country Code (e.g., +234)"
          id="country_code"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />



        <button 
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">Something went wrong!</p>}

      <div className="flex flex-row gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
