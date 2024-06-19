import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="flex p-4 bg-primary">
      <Link to="/" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Home</span>
      </Link>
      <Link to="/blog" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Acessar o blog</span>
      </Link>
      <Link to="/contact" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Realizar contato</span>
      </Link>
      <Link to="/about" className="px-3 hover:underline">
        <span className="text-highlight font-roboto">Saiba mais</span>
      </Link>
    </footer>
  );
}