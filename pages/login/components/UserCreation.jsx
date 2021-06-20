import React, { useState, useEffect } from 'react'
import { httpRequest } from '/utils/api'
import styles from '/styles/Login.module.css'
import { makeStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Logo from '/src/Logo'
import InputMask from 'react-input-mask'
import { normalizeText } from '/utils/removeMasks'

const UserCreation = (props) => {
	const [grow, setGrow] = useState(false)
	const [name, setName] = useState('')
	const [alias, setAlias] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [document, setDocument] = useState('')
	const [password, setPassword] = useState('')
	const [passwordC, setPasswordC] = useState('')

	useEffect(() => {
		setGrow(true)
	})

	const submitForm = (e) => {
		e.preventDefault()
		let data = {
			name,
			alias,
			email,
			phone: normalizeText(phone),
			document: normalizeText(document),
			password,
			passwordC
		}
	}

	return (
		<Grow in={grow}>
			<div className={styles.IndexLayoutChange}>
				<div className={styles.blockCreateUser}>
					<Logo padding={'20px 0px 10px 0px'}></Logo>
					<hr className={styles.logoDivider} />
					<form
						className={styles.formCreateUser}
						onSubmit={(e) => submitForm(e)}
					>
						<div className={styles.formInputBlock}>
							<div className={styles.formInputBlock}>
								<label htmlFor="name">Usuário</label>
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
								/>
							</div>
							<div className={styles.formInputBlock}>
								<label htmlFor="alias">Nome</label>
								<input
									id="alias"
									value={alias}
									onChange={(e) => setAlias(e.target.value)}
									type="text"
								/>
							</div>
							<div className={styles.formInputBlock}>
								<label htmlFor="email">E-mail</label>
								<input
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
								/>
							</div>
							<div className={styles.formColumnsBlock}>
								<div className={styles.formInputBlock}>
									<label htmlFor="phone">Celular</label>
									<InputMask
										mask="(99) 99999-9999"
										id="phone"
										value={phone}
										alwaysShowMask={true}
										onChange={(e) => setPhone(e.target.value)}
										type="text"
									/>
								</div>
								<div className={styles.formInputBlock}>
									<label htmlFor="document">CPF</label>
									<InputMask
										mask="999.999.999-99"
										id="document"
										alwaysShowMask={true}
										value={document}
										onChange={(e) => setDocument(e.target.value)}
										type="text"
									/>
								</div>
							</div>
							<div className={styles.formColumnsBlock}>
								<div className={styles.formInputBlock}>
									<label htmlFor="password">Senha</label>
									<input
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										type="password"
									/>
								</div>
								<div className={styles.formInputBlock}>
									<label htmlFor="passwordC">Confirmação</label>
									<input
										id="passwordC"
										value={passwordC}
										onChange={(e) => setPasswordC(e.target.value)}
										type="password"
									/>
								</div>
							</div>
							<div className={styles.formButtonsBlockCreateUser}>
								<div className={styles.formInputBlock}>
									<a
										type="button"
										className={styles.backButton}
										onClick={(e) => {
											props.onReturnToLogin(true)
										}}
										style={{ width: '50%' }}
									>
										Voltar
									</a>
								</div>
								<div
									className={styles.formInputBlock}
									style={{ alignItems: 'flex-end' }}
								>
									<button
										type="submit"
										className={styles.buttonLogin}
										style={{ width: '70%' }}
									>
										Confirmar
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Grow>
	)
}

export default UserCreation
