import {useState} from "react";

import styles from "./Nav.module.scss";

const Nav = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	const buttonClick = () => {
		setDisplayMenu((prevState) => {
			return !prevState;
		});
	};

	return (
		<nav className={styles["nav__main"]}>
			<div className={styles["nav__header"]}>D. Nicholas</div>
			<div className={styles["cheveron"]} onClick={buttonClick}>
				<img src="/icons/menu.svg" alt="Menu" />
			</div>
			<div
				className={`${styles["nav__options"]} ${
					!displayMenu
						? styles["display__none"]
						: styles["display__true"]
				}`}
			>
				<ul>
					<li>Home</li>
					<li>Blog</li>
					<li>About Me</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
