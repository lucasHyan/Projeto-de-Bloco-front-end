import React from "react";
import { IconButton } from "../../components/IconButton";
import { WebSiteLogo } from "../../components/WebSiteLogo";
import { FaGithub } from "react-icons/fa";
import { GlobalStore } from "../../GlobalStore";
import { Link } from 'react-router-dom';


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

  return (
  <div className="text-highlight flex items-center p-3 space-x-6">
    <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-30 h-10 flex items-center justify-center space-x-4">
      <Link to="/CreateAccount" className="text-center text-lg">
        Criar conta
      </Link>
    </div>
    <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-30 h-10 flex items-center justify-center space-x-4">
      <Link to="/LoginForm" className="text-center text-lg">
        Login
      </Link>
      </div>
  </div>
);
}

function ActionsDiv() {
  return (
    <div className="text-highlight flex items-center p-3 space-x-8">
      <IconButton to="/">
        <div className="flex items-center space-x-3">
          <WebSiteLogo />
          <span>Fórum-2000</span>
        </div>
      </IconButton>
      <IconButton
        to="/CreateForumPost"
        className="opacity-70 flex Small-At:inline-flex"
      >
        Criar Post
      </IconButton>
      <IconButton to="/novos" className="opacity-70 flex Small-At:inline-flex">
        Novos
      </IconButton>
      <IconButton
        to="/categorias"
        className="opacity-70 flex Small-At:inline-flex"
      >
        Categorias
      </IconButton>
    </div>
  );
}
