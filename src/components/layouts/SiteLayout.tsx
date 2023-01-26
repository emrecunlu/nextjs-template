import { type } from 'os';
import Navbar from '../Navbar';

type LayoutProps = {
	children: React.ReactNode;
};

export default function SiteLayout({ children }: LayoutProps) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
