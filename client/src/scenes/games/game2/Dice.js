import React from 'react';
import './Dice.css';
const Dice = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#F3963B' : 'white'
  };
  return (
    <div className="dice" style={styles} onClick={props.toggle}>
      <h2 className="die-num"> {props.value} </h2>
    </div>
  );
};

export default Dice;
