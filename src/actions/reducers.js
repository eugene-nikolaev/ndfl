import {SELECT_INPUT, BUTTON_PRESSED} from './types'
import MoneyContainer from '../util/money_container.js'

const initialState = {
  selectedInput: 'beforeTax',
  beforeTax: {
  	value: 0
  },
  afterTax: {
  	value: 0
  }
}

function roundToTwo(num) {    
  return +(Math.round(num + "e+2")  + "e-2");
}

export function ndflApp(state = initialState, action) {
  switch (action.type) {
    case SELECT_INPUT:
      return Object.assign({}, state, {
        selectedInput: action.inputId
      })
    case BUTTON_PRESSED:
      let computerMap = {
        beforeTax: (afterTaxValue) => {
          return parseFloat(afterTaxValue) / 87 * 100
        },
        afterTax: (beforeTaxValue) => {
          return parseFloat(beforeTaxValue) * 0.87
        }
      }
      let buttonId = action.buttonId
      let srcInputId = state.selectedInput
      let dstInputId = ('beforeTax' === srcInputId) ? 'afterTax' : 'beforeTax'
      let srcInputProps = state[srcInputId]
      let dstInputProps = state[dstInputId]
      let parsedDigit = parseInt(buttonId)
      let srcValueText = srcInputProps.value.toString()
      let srcValue = new MoneyContainer(srcValueText)
      if (parsedDigit >= 0 && parsedDigit <= 9) {
        srcValue.append(parsedDigit)
      } else if ("." === buttonId) {
        srcValue.append(buttonId)
      } else if("C" === buttonId) {
        srcValue.deleteFromTail()
      }
      let computeDstValue = computerMap[dstInputId]
      if (undefined === computeDstValue) {
        console.log("Computer function not found for input id: " + srcInputId)
        return state 
      }
      let newRawDstValue = computeDstValue(srcValue.toFloat())
      newRawDstValue = roundToTwo(newRawDstValue)
      let newDstValue = new MoneyContainer(newRawDstValue)
      let newState = Object.assign({}, state)
      newState[srcInputId] = {
        value: srcValue.toString()
      }
      newState[dstInputId] = {
        value: newDstValue.toString()
      }
      return newState
    default:
      return state
  }
}