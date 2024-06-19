import React from 'react';
import { GlobalStore } from '../GlobalStore';
import { UserCard } from '../components/UserCard';

export function UserInfo() {
  const user = GlobalStore((state) => state.user);

  if (!user) {
    return <p>No user is currently logged in.</p>;
  }

  return (
    <div className='max-w-screen-lg mx-auto mt-10'>
      <UserCard user={user} />
    </div>
  );
};

