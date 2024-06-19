import React from "react";
import { GlobalStore } from "../GlobalStore";
import { UserCard } from "../components/UserCard";

export function TopUsers() {
  const accounts = GlobalStore((state) => state.accounts);

  const sortedAccounts = [...accounts].sort((a, b) => b.points - a.points);

  return (
    <div>
      <h1>Top Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-0 w-full max-w-screen-lg mx-auto">
        {sortedAccounts.map((account, index) => (
          <UserCard key={index} user={account} />
        ))}
      </div>
    </div>
  );
}
