import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function fetchUserData(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        email,
        role: "User",
      });
    }, 1000);  
  });
}

function Success() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: () => fetchUserData(user.email),
    enabled: !!user?.email, 
  });

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-green-100">
      <h2 className="text-2xl font-bold text-green-800 mb-2">
        Welcome, {data.name}!
      </h2>
      <p className="mb-4 text-gray-700">Email: {data.email}</p>
      <p className="mb-4 text-gray-700">Role: {data.role}</p>
      <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Success;
