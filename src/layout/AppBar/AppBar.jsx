import React from "react";
import { IconButton } from "../../components/IconButton";
import { WebSiteLogo } from "../../components/WebSiteLogo";
import { GlobalStore } from "../../GlobalStore";
import { Link } from "react-router-dom";

export function AppBar() {
  return (
    <header className="relative z-10 flex justify-between text-cor-principal bg-secondary font-roboto shadow-custom">
      <ActionsDiv />
      <LogosDiv />
    </header>
  );
}

function LogosDiv() {
  const user = GlobalStore((state) => state.user);
  const logout = GlobalStore((state) => state.logout);

  return (
    <div className="text-highlight flex items-center p-3 space-x-8">
      {!user && (
        <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-30 h-10 flex items-center justify-center space-x-4">
          <Link to="/CreateAccount" className="text-center text-lg">
            Criar conta
          </Link>
        </div>
      )}
      <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-30 h-10 flex items-center justify-center space-x-4">
        <Link
          to={user ? "/UserInfo" : "/LoginForm"}
          className="text-center text-lg"
        >
          {user ? user.username : "Login"}
        </Link>
      </div>
      {user && (
        <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-30 h-10 flex items-center justify-center space-x-4 sm:block hidden">
          <button onClick={logout} className="text-center text-lg">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function ActionsDiv() {
  return (
    <div className="text-highlight flex items-center p-3 space-x-8">
      <IconButton to="/">
        <div className="flex items-center space-x-3 sm:block hidden">
          <WebSiteLogo />
        </div>
      </IconButton>
      <IconButton to="/CreateForumPost" className="opacity-70 flex">
        Criar Post
      </IconButton>
      <IconButton to="/novos" className="opacity-70 flex">
        Novos
      </IconButton>
      <IconButton to="/TopUsers" className="opacity-70 flex">
        Top Usuários
      </IconButton>
    </div>
  );
}
