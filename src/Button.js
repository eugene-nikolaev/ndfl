import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buttonPressed } from './actions/factories'

class Button extends React.Component {
  render() {
    return (
      <td onTouchStart={() =>{
          this.props.dispatch(buttonPressed(this.props.caption))
        }}>
        <span className="centerContainer">
          <div className="taxButton unselectable">
            {this.props.caption}
          </div>
        </span>
      </td>
    )
  }
}

export default connect(state => state)(Button)