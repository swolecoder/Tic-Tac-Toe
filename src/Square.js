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

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { currentBoard: 0 };
  }

  render() {
    return (
      <div style={styles} onClick={this.props.handleClick}>
        {this.props.value}
      </div>
    );
  }
}

export default Square;
