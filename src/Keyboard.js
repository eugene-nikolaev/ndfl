import React, { Component } from 'react'
import Button from "./Button"

const Keyboard = () => (
	<table className="keyboard">
		<tbody>
			<tr>
		    <Button caption="7" />
		    <Button caption="8" />
		    <Button caption="9" />
		    <Button caption="C" />
			</tr>
			<tr>
		    <Button caption="4" />
		    <Button caption="5" />
		    <Button caption="6" />
		    <Button caption="." />
			</tr>
			<tr>
		    <Button caption="1" />
		    <Button caption="2" />
		    <Button caption="3" />
		    <Button caption="0" />
			</tr>
		</tbody>
	</table>
)

export default Keyboard