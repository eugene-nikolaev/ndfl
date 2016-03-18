import React, { Component } from 'react'
import Button from "./Button"

const Keyboard = () => (
	<table className="keyboard">
		<tbody>
			<tr>
			  <td>
			    <Button caption="7" />
			  </td>
			  <td>
			    <Button caption="8" />
			  </td>
			  <td>
			    <Button caption="9" />
			  </td>
			  <td>
			    <Button caption="C" />
			  </td>
			</tr>
			<tr>
			  <td>
			    <Button caption="4" />
			  </td>
			  <td>
			    <Button caption="5" />
			  </td>
			  <td>
			    <Button caption="6" />
			  </td>
			  <td>
			    <Button caption="." />
			  </td>
			</tr>
			<tr>
			  <td>
			    <Button caption="1" />
			  </td>
			  <td>
			    <Button caption="2" />
			  </td>
			  <td>
			    <Button caption="3" />
			  </td>
			  <td>
			    <Button caption="0" />
			  </td>
			</tr>
		</tbody>
	</table>
)

export default Keyboard