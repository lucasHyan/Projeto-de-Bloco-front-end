import React from 'react';
import { GlobalStore } from '../GlobalStore';

export function UserInfo() {
  const user = GlobalStore((state) => state.user);

  if (!user) {
    return <p>No user is currently logged in.</p>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <p>Username: {user.username}</p>
      <p>Points: {user.points}</p>
      <img src={user.image} alt="User" />
    </div>
  );
};

