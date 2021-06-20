import React, { useState, useEffect} from 'react'
import styles from '/styles/Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

const Logo = (props) => {
	const [secondaryTextShow, setSecondaryTextShow] = useState(true)

	useEffect(() => {
		console.log(props.secondaryTextShow)
		if (typeof props.secondaryTextShow !== 'undefined')
			setSecondaryTextShow(props.secondaryTextShow)
	}, []);

	return (
		<div className={styles.setyLogo} style={{ padding: props.padding }}>
			<div
				className={styles.setyLogoIconBox}
				style={{ fontSize: props.logoSize }}
			>
				<FontAwesomeIcon icon={faBuilding} color={typeof props.logoColor !== 'undefined' ? props.logoColor : props.color} />
			</div>
			<div className={styles.setyLogoTextBox}>
				<p
					className={styles.setyLogoText}
					style={{ color: props.color, fontSize: props.primaryTextSize }}
				>
					Bonfa's Hotel
				</p>
				{secondaryTextShow ? (
					<span
						className={styles.setyLogoSubText}
						style={{ color: props.color }}
					>
						Sua Segunda Casa
					</span>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Logo
