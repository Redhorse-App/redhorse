import routes from 'constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (): JSX.Element => {
  return (
    <nav className="flex-initial bg-red-300 w-32">
      <ul>
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink to={path as string}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
