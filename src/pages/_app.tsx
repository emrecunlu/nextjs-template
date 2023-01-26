import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css';
import { useRouter } from 'next/router';
import { UrlObject } from 'url';

function Loading() {
	const router = useRouter();

	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const handleStart = (url: string) =>
			url !== router.asPath && setLoading(true);

		const handleComplete = (url: string) =>
			url === router.asPath &&
			setTimeout(() => {
				setLoading(false);
			}, 5000);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	});

	return loading && <h1>Loading</h1>;
}

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}
