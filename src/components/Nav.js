import React from 'react';
import { Link } from 'react-router-dom';
import { toggleTheme } from '../actions/changeTheme';
import { connect } from 'react-redux';
import './Project.css';


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


  const changeTheme= (e) =>{
    e.preventDefault();
    if(props.storeState.changeThemeReducer.theme === 'dark-mode')
    {
        props.dispatch( toggleTheme('light-mode') );
    }
    else if ( props.storeState.changeThemeReducer.theme === 'light-mode'  )
    {
        props.dispatch( toggleTheme('dark-mode') );
    }
  }  
  return (
    <nav className={props.storeState.changeThemeReducer.theme}>
      <h1>{props.heading}</h1>
      <button onClick={changeTheme}>Change Theme</button>
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

export default connect( myStore => { return { storeState: myStore }}) (Nav);