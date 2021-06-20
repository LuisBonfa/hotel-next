import React from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const AlertText = (props) => {
	return (
		<React.Fragment>
			<IconButton
				size={5}
				aria-label="close"
				color="inherit"
				onClick={() => {
					props.onClose()
				}}
			></IconButton>
		</React.Fragment>
	)
}

export default AlertText
