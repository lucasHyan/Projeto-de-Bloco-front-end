import { Link } from 'react-router-dom';

export function IconButton({ to, children }) {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
}