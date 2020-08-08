import React from 'react';

export default class Button extends React.Component {
    render() {
      let value = this.context;
      console.log(value);
      return (
        <button>Theme of the button: </button>
      );
    }
}