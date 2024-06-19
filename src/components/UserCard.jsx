export function UserCard({ user }) {
  return (
    <div className="flex flex-col items-center bg-primary shadow-md rounded-lg overflow-hidden">
      <img src={user.image} alt="User" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text center">{user.username}</h2>
        <p className="text-highlight text-center">Points: {user.points}</p>
      </div>
    </div>
  );
}