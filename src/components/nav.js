import { NavLink } from 'react-router-dom';
import classes from '../styles/Nav.module.css';

const Navbar = () => (
  <section className={classes.nav}>
    <h1>Math Magician</h1>
    <ul className={classes.navul}>
      <li>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? classes.active : '')}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/calculator"
          className={(navData) => (navData.isActive ? classes.active : '')}
        >
          Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/quote"
          className={(navData) => (navData.isActive ? classes.active : '')}
        >
          Quote
        </NavLink>
      </li>
    </ul>
  </section>
);

export default Navbar;
