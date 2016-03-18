import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectInput } from './actions/factories'

class Input extends React.Component {
  render() {
    return <div className={this.props.className}
                onClick={() =>{
                    this.props.dispatch(selectInput(this.props.name))
                }}>
                {this.props.value}
           </div>;
  }
}

const reverse = (str) => {
  return str.split("").reverse().join("")
}

const formatAsMoney = (str) => {
  let frags = str.split(".")
  let whole = frags[0]
  let fraction = ""
  if (!(undefined === frags[1])) {
    fraction = "." + frags[1]
  }
  let revertedGroups = reverse(whole).match(/.{1,3}/g)
  let formattedWhole = reverse(revertedGroups.join(" "))
  return formattedWhole + fraction
}

const mapStateToProps = (state, ownProps) => {
  let ownMap = state[ownProps.name]
  let className = "taxInput"
  if (ownProps.name === state.selectedInput) {
    className += " selected"
  }
  let value = ownMap.value.toString()
  value = formatAsMoney(value)
  console.log(value)
  return {
    name: ownProps.name,
    className: className,
    value: value
  }
}

export default connect(mapStateToProps)(Input)