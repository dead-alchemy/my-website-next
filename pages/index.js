import Head from "next/head";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>D. Nicholas</title>
				<meta
					name="description"
					content="The personal website of David Nicholas"
				/>
			</Head>
			<Nav />
			<main>
				<h1>My Website</h1>

				<div></div>
			</main>
		</div>
	);
}
