import { useRef } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import FeatureCard from './FeatureCard';

export default function Features() {
	const navigationPrevRef = useRef<HTMLDivElement | null>(null);
	const navigationNextRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className="container">
			<div className="md:mr-break-out">
				<Swiper
					modules={[Autoplay, Navigation]}
					autoplay={{ disableOnInteraction: false, delay: 1500 }}
					slidesPerView={4}
					spaceBetween={30}
					loop={true}
				>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeatureCard
							title="Name"
							description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
							to="/name"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
			<div ref={navigationNextRef}>İleri</div>
			<div ref={navigationPrevRef}>Geri</div>
		</div>
	);
}
