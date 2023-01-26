import Image from 'next/image';
import Link from 'next/link';

export default function MainHero() {
	return (
		<div className="min-h-screen w-full flex items-center relative">
			<div className="w-full max-w-6xl mx-auto px-8">
				<h2 className="text-center text-gray-100 font-semibold mb-6 tracking-wide">
					DESIGN INSPIRATION
				</h2>
				<h1 className="text-center font-bold text-white text-6xl leading-tight">
					Convallis turpis erat tempus, vivera aliquet.
				</h1>
				<div className="flex justify-center mt-16">
					<Link
						href="/contact"
						className="bg-indigo-600 text-white px-10 py-3 rounded-md font-semibold text-sm border border-transparent hover:shadow-md transition-all"
					>
						Get In Touch
					</Link>
				</div>
				<div className="absolute inset-0 w-full h-full -z-10">
					<div className="relative h-full w-full bg-indigo-600/20">
						<Image
							className="w-full h-full object-cover absolute -z-10 inset-0 brightness-50"
							src="/static/images/1920x1080.png"
							width={1920}
							height={1080}
							alt="Hero Backgronud"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
