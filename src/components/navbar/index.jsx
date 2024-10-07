import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';

const data = [
  { label: 'HOME', to: '/' },
  { label: 'About', to: '/About' },
  { label: 'Contact', to: '/Contact' },
  { label: 'Projects', to: '/Projects' },
  { label: 'Skills', to: '/Skills' }
];

export const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <FaReact size={30} color="yellow" />
        </Link>
        <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} color="yellow"/> : <FaBars size={30} color="yellow"/>}
        </div>
      </div>
    </nav>
  );
};
