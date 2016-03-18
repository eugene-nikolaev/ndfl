import {SELECT_INPUT, BUTTON_PRESSED} from './types'

export function selectInput(inputId) {
  return {
    type:    SELECT_INPUT,
    inputId: inputId
  }
}

export function buttonPressed(buttonId) {
	return {
		type:     BUTTON_PRESSED,
		buttonId: buttonId
	}
}