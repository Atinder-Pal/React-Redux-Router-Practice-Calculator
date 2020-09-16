import React from 'react';
import { Link } from 'react-router-dom';


/**
 * <Link>
 * The Link component lets us create anchors (<a>) in our
 * page in a way that our <Route> components will understand.
 * <Link to="">
 * Ensure you pass into the <Link> a "to" prop that matches
 * the "path" prop in your <Route> component(s)!
 */
function Nav (props)
{
  return (
    <nav className="calculator-nav">
      <h1>{props.heading}</h1>
      <ul>
        <li>
          <Link to="/">
            Home (Calculator)
          </Link>
        </li>
        <li>
          <Link to="/calculations-history">
            Calculations History
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;