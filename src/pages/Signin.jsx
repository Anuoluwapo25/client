
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setError(false);
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
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

      const { token } = data;

    // Store the token in localStorage
    localStorage.setItem("token", token);
    console.log('Retrieved token:', token);
    
      // Redirect to home page on successful login
      navigate('/dashboard');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign in</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.password}
          required
        />

        <button 
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-5">Something went wrong!</p>}

      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <p>
          Forgot password?{" "}
          <span
            onClick={() => navigate("/forgot-password")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Reset it here
          </span>
        </p>

        <Link to="/signup">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
    </div>
  );
}