import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Keyboard from "./Keyboard"
import Input from "./Input"

const App  = () =>  (
	<div>
	  <Input name="beforeTax" />
	  <Input name="afterTax"  />
	  <Keyboard />
	</div>
)

export default App