import Features from '@/components/features/Features';
import Info from '@/components/Info';
import SiteLayout from '@/components/layouts/SiteLayout';
import MainHero from '@/components/MainHero';
import { useEffect } from 'react';

export default function Home() {
	return (
		<SiteLayout>
			<MainHero />
			<section id="features">
				<div className="py-32 drop-shadow-lg-">
					<div className="w-full max-w-xl mx-auto xl:px-0 px-8">
						<h1 className="font-bold text-gray-900 drop-shadow-2xl text-4xl text-center mb-16">
							The best design for your studio website
						</h1>
					</div>
					<Features />
				</div>
			</section>
			<section id="about">
				<div className="py-32">
					<Info
						title="The best design for your studio website"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						image="/static/images/600x600.png"
						to={{ title: 'Experienced Team', href: '/merhhab' }}
					/>
				</div>
			</section>
			<section id="about-2">
				<div className="py-32">
					<Info
						rtl
						title="The best design for your studio website"
						description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
						image="/static/images/600x600.png"
						to={{ title: 'Experienced Team', href: '/merhhab' }}
					/>
				</div>
			</section>
		</SiteLayout>
	);
}
