import React from 'react';
import { connect } from 'react-redux';
import './Project.css';


function CalculationsHistory ( props )
{
  return (
    <div className={props.storeState.changeThemeReducer.theme}>
      <h2>Calculations History</h2>
      <ul>
        {props.storeState.calculationsReducer.map( ( calculation, index ) => {
          return (
            <li key={index}>
              {/* {calculation.inputs.newInput1 + " "+ calculation.inputs.newOperation + " " + calculation.inputs.newInput2 + "  = " + calculation.result } */}
             {calculation.inputs.split("").join(" ")+ "  = " + calculation.result}
            </li>
          );}
        )}
      </ul>
    </div>
  );
}

// Use connect to make our "To-Do list" available via props.toDos.
export default connect( myStore => ( { storeState: myStore } ) )( CalculationsHistory );