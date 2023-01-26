import Image from 'next/image';
import Link from 'next/link';

export type NavbarItem = {
	title: string;
	to: string;
	children?: { title: string; to: string }[];
};

export default function Navbar() {
	const navItems: NavbarItem[] = [
		{
			title: 'Home',
			to: '/',
		},
		{
			title: 'Templates',
			to: '/templates',
		},
		{
			title: 'Price',
			to: '/price',
		},
		{
			title: 'Help',
			to: '/help',
		},
	];

	return (
		<nav className="h-28 flex items-center absolute w-full inset-0 z-10">
			<div className="container">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image
							src="/static/images/site_logo.png"
							width={111}
							height={28}
							alt="Header Logo"
						/>
					</Link>
					<ul className="flex items-center gap-x-12">
						{navItems.map((item: NavbarItem, index: number) => (
							<li key={index}>
								<Link
									href={item.to}
									className="text-white font-medium hover:text-gray-400 text-[15px] tracking-wide transition-all"
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
