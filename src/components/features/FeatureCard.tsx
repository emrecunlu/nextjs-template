import Link from 'next/link';

type Props = {
	title: string;
	description: string;
	to: string;
};

export default function FeatureCard({ title, description, to }: Props) {
	return (
		<div className="w-full rounded-md shadow-xl shadow-indigo-50 py-12 px-8 border border-gray-100 select-none">
			<h1 className="text-gray-900 font-bold text-2xl drop-shadow-2xl">
				{title}
			</h1>
			<span className="inline-block my-8 text-gray-600 text-sm">
				{description}
			</span>
			<Link
				href={to}
				className="font-semibold text-sm underline hover:text-indigo-600 transition-all"
			>
				Experienced Team
			</Link>
		</div>
	);
}
