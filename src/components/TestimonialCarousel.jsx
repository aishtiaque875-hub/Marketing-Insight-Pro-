import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialCarousel.css';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[current];

  return (
    <div className="testimonials-wrap">
      <div className="testimonial-card glass-card">
        <div className="card-top">
          <div className="stars-wrap">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#c49a3a" color="#c49a3a" />
            ))}
          </div>
          <div className="result-badge">
            {item.result}
          </div>
        </div>

        <div className="quote-icon-wrap">
          <Quote size={32} className="gold-quote-icon" />
        </div>

        <p className="quote-text">"{item.quote}"</p>

        <div className="client-footer">
          <div className="client-name">{item.name}</div>
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevSlide} aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <span className="carousel-counter">{current + 1} / {testimonials.length}</span>
            <button className="carousel-btn" onClick={nextSlide} aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
