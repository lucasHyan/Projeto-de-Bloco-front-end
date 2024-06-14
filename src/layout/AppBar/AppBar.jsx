import React from "react";
import { IconButton } from "../../components/IconButton";
import { WebSiteLogo } from "../../components/WebSiteLogo";
import { FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { ScrollButton } from "../../components/ScrollButton";
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
  return (
    <div className="text-highlight flex items-center p-3 space-x-3">
      <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center">
        <IconButton className="text-center text-lg">
          <FaGithub className="w-6 h-6" />
        </IconButton>
      </div>
      <div className="transition-colors duration-150 ease-in-out rounded-full hover:bg-gray-300 hover:bg-opacity-50 w-10 h-10 flex items-center justify-center">
        <IconButton to="/CreateAccount" className="text-center text-lg">
          Criar conta
        </IconButton>
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
      <IconButton to="/CreateForumPost" className="opacity-70 flex Small-At:inline-flex">
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
