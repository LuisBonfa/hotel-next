import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

export default function Alert(props) {
	const [open, setOpen] = useState(true)
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
	}

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={open}
			autoHideDuration={2000}
			onClose={handleClose}
		>
			<MuiAlert
				style={{ fontSize: '12px' }}
				elevation={6}
				variant="filled"
				onClose={handleClose}
				severity="success"
				icon={false}
			>
				<span>{props.message}</span>
			</MuiAlert>
		</Snackbar>
	)
}
