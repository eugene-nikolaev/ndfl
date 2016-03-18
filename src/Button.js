import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buttonPressed } from './actions/factories'

class Button extends React.Component {
  render() {
    return <input className="taxButton"
                  style={this.style}
                  type="button"
                  value={this.props.caption}
                  onClick={() =>{
                    this.props.dispatch(buttonPressed(this.props.caption))
                  }}
            />;
  }
}

export default connect(state => state)(Button)