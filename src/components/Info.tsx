import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	title: string;
	description: string;
	image: string;
	rtl?: boolean;
	to?: {
		title: string;
		href: string;
	};
};

export default function Info({ title, description, to, image, rtl }: Props) {
	return (
		<div className="container">
			<div className="flex items-center gap-x-20">
				<div
					className={classNames({
						'flex-1': true,
						'order-1': rtl,
					})}
					data-aos={`${rtl ? 'fade-left' : 'fade-right'}`}
					data-aos-duration="1000"
				>
					<h1 className="text-gray-900 font-bold text-4xl drop-shadow-2xl">
						{title}
					</h1>
					<span className="text-gray-600 leading-relaxed inline-block my-8">
						{description}
					</span>
					{to && (
						<Link
							href={to.href}
							className="text-indigo-600 underline font-semibold drop-shadow-xl"
						>
							{to.title}
						</Link>
					)}
				</div>
				<div>
					<Image
						data-aos-duration="1000"
						data-aos-delay="700"
						className="object-cover rounded-md"
						src={image}
						width={600}
						height={600}
						alt={title}
						data-aos={`${rtl ? 'fade-right' : 'fade-left'}`}
					/>
				</div>
			</div>
		</div>
	);
}
