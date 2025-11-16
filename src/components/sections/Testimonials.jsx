import React from 'react';
import './Testimonials.css';
import ImageWithFallback from '../common/ImageWithFallback';

const Testimonials = () => {
	const items = [
		{ name: 'James T.', text: 'Exceptional service and fast turnaround. Highly recommended.' },
		{ name: 'Aisha K.', text: 'Their attention to detail transformed my car. Great team.' },
		{ name: 'Liam R.', text: 'Professional, timely, and skilled. Will return for future work.' }
	];

	return (
		<section id="testimonials" className="section testimonials">
			<div className="container">
				<h2 className="section-title">What our clients say</h2>
				<div className="testimonials-grid">
					{items.map((it, idx) => {
																								const avatars = [
																									'/src/assets/images/testimonials.jpg',
																									'/src/assets/images/testimonials.jpg',
																									'/src/assets/images/testimonials.jpg'
																								];
						return (
							<div className="testimonial-card" key={idx}>
								<ImageWithFallback src={avatars[idx % avatars.length]} alt="avatar" className="testimonial-avatar" />
								<p className="testimonial-text">"{it.text}"</p>
								<p className="testimonial-name">— {it.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
