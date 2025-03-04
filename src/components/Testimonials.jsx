import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
    const testimonials = [
        {
            quote:
                "Thanks to EcoAction, our neighborhood is cleaner than it's been in years. The quick response from authorities after reporting waste has been impressive.",
            author: "Priya Sharma",
            role: "Delhi Resident",
        },
        {
            quote:
                "I found employment through EcoAction's recycling program. Now I can support my family while helping the environment.",
            author: "Rahul Kumar",
            role: "Recycling Worker",
        },
        {
            quote:
                "As a municipal officer, this platform has revolutionized how we manage waste complaints. Response time has decreased by 60%.",
            author: "Suresh Patel",
            role: "Municipal Officer",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const showTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    // Auto-advance every 7 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 7000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <section className="testimonials">
            <h2 className="section-title">What People Say</h2>
            <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className={`testimonial ${index === currentIndex ? "active" : ""}`}
                    >
                        <div className="quote">
                            <p>{testimonial.quote}</p>
                        </div>
                        <div className="author">
                            <img src="/api/placeholder/60/60" alt="User avatar" className="avatar" />
                            <div className="author-info">
                                <h4>{testimonial.author}</h4>
                                <p>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slider-controls">
                    <button className="prev-btn" onClick={handlePrev}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <div className="dots">
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => showTestimonial(index)}
                            ></span>
                        ))}
                    </div>
                    <button className="next-btn" onClick={handleNext}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;