import { FC, ReactNode } from "react";
import style from "./layout.module.scss";
import Header from '../headerParts/Header'
import Head from 'next/head'

interface layoutProps {
	children: ReactNode;
}

const Layout: FC<layoutProps> = ({ children }) => {
	return (
		<>
		<Head>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
			<link rel="icon" href="/icon-48x48.png"/>
		</Head>
		<div className={style.layout}>
			<Header />
			<main className={style.content}>{children}</main>
		</div>
		</>
	);
};

export default Layout;
