import React from "react";
import { GlobalStore } from "../GlobalStore";
import { UserCard } from "../components/UserCard";
import { useNavigate } from "react-router-dom";

export function UserInfo() {
  const user = GlobalStore((state) => state.user);
  const logout = GlobalStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user) {
    return <p>No user is currently logged in.</p>;
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-10">
      <UserCard user={user} />
      <button
        onClick={handleLogout}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}
