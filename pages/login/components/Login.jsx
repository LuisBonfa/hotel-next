import React, { useState, useEffect } from 'react'
import { httpRequest } from '/utils/api'
import styles from '/styles/Login.module.css'
import Grow from '@material-ui/core/Grow'
import Logo from '/src/Logo'
import Alert from '/src/Alert'
import { useRouter } from 'next/router'

const Login = (props) => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [grow, setGrow] = useState(false)
	const [alert, setAlert] = useState(null)
	const router = useRouter()

	function onSubmit(e) {
		e.preventDefault()

		httpRequest('POST', { username: name, password: password }, '/login')
			.then((response) => response.json())
			.then((result) => {
				sessionStorage.setItem('token', result.bearer)
				router.push('/dashboard')
			
			})
	}

	useEffect(() => {
		setGrow(true)
	})

	return (
		<Grow in={grow}>
			<div className={styles.IndexLayoutChange}>
				<div className={styles.infoLogin}>
					<Logo color={'white'} padding={"20px 0px 10px 0px"}></Logo>
					<p className={styles.infoLoginText}>
						O Hotel Bonfá está situado em São José dos Campos e dispõe de
						academia e bar. O hotel oferece recepção 24 horas, serviço de
						concierge e Wi-Fi gratuito. <br />
						<br />
						O hotel dispõe de sauna e serviço de quarto. Os quartos dispõem de
						área de estar e TV de tela plana. Os quartos dispõem de banheiro
						privativo com amenidades de banho gratuitas. Todos os quartos do
						Hotel Maruá dispõem de ar-condicionado e mesa de trabalho.
						<br />
						<br />
						Monte Verde fica a 188 km do Hotel Bonfa, enquanto Guararema está a
						38 km de distância. O aeroporto mais próximo é o Aeroporto
						Internacional de Guarulhos, a 73 km do hotel.
					</p>
				</div>
				<div className={styles.formLogin}>
					<Logo padding={"20px 0px 10px 0px"}></Logo>
					<form className={styles.formDataLogin} onSubmit={(e) => onSubmit(e)}>
						<div className={styles.formInputBlock}>
							<label htmlFor="name">Usuário</label>
							<input
								id="name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								type="text"
							/>
						</div>
						<div className={styles.formInputBlock}>
							<label htmlFor="password">Senha</label>
							<input
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
							/>
						</div>
						<div className={styles.formButtonsBlockLogin}>
							<div className={styles.signUpButtonBox}>
								<a
									className={styles.forgotPasswordLink}
									onClick={(e) => props.onCreatePress(false)}
								>
									Ainda não é cadastrado?
								</a>
							</div>
							<div className={styles.loginButtonBlock}>
								<button type="submit" className={styles.buttonLogin}>
									Confirmar
								</button>
							</div>
						</div>
					</form>
					<div className={styles.forgotPasswordBlock}>
						<a className={styles.forgotPasswordLink} href="">
							Esqueceu a Senha?
						</a>
					</div>
				</div>
				{alert}
			</div>
		</Grow>
	)
}

export default Login
