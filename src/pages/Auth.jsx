// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Auth() {
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     login(email);  
//     navigate("/success");
//   };

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Login / Sign Up</h2>
//       <form onSubmit={handleLogin} className="flex flex-col gap-3">
//         <input
//           type="email"
//           placeholder="Enter email"
//           className="border px-4 py-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Continue
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Auth;


import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    login(email);
    navigate("/success");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Login or Sign Up</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default Auth;
