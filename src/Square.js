import React, { Component } from 'react';

const styles = {
  backgroundColor: 'white',
  top: '50%',
  width: '200px',
  height: '200px',
  border: '2px solid #33A1FD',
  textAlign: 'center',
  margin: '-1',
  fontSize: '60px',
  display: 'inline-block',
  verticalAlign: 'top'
};

const Square = props => {
  return (
    <div style={styles} onClick={props.handleClick}>
      {props.value}
    </div>
  );
};

export default Square;
