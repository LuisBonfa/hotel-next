import React, { useState, useEffect } from 'react'
import styles from '/styles/Index.module.css'
import Head from 'next/head'
import UserCreation from '/pages/login/components/UserCreation'
import Login from '/pages/login/components/Login'

const Index = (props) => {
	
	const [viewLogin, setViewLogin] = useState(true)
	const [open, setOpen] = useState(false)

	useEffect(() => {
		setOpen(true)
	})

	return (
		<div className={styles.loginContainer}>
			{viewLogin ? (
				<Login onCreatePress={(status) => setViewLogin(status)} />
			) : (
				<UserCreation onReturnToLogin={(status) => setViewLogin(status)} />
			)}
		</div>
	)
}

export default Index
