import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Keyboard from "./Keyboard"
import Input from "./Input"

const App  = () =>  (
	<div>
	  <table className="inputs-table">
	  	<tbody>
  	  	<tr>
  	      <Input name="beforeTax" />
  	    </tr>
  	    <tr>
  	      <Input name="afterTax"  />
  	    </tr>
      </tbody>
	   </table>
	  <Keyboard />
	</div>
)

export default App