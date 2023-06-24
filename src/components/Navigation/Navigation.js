import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return (
    <Nav>
      <Link
        isactive={location.pathname === '/' ? 'active' : 'inactive'}
        to="/"
        end
      >
        Home
      </Link>
      {isLoggedIn && (
        <Link
          isactive={
            location.pathname.startsWith('/phonebook') ? 'active' : 'inactive'
          }
          to="/phonebook"
        >
          Phonebook
        </Link>
      )}
    </Nav>
  );
};