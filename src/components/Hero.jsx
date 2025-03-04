import React from "react";

function Hero({ openLoginModal }) {
    const handleReportClick = () => {
        const isLoggedIn = false; // Mock state; replace with actual auth later
        if (isLoggedIn) {
            document.querySelector("#report").scrollIntoView({ behavior: "smooth" });
        } else {
            openLoginModal();
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h2>Turn Waste Into Opportunity</h2>
                <p>
                    Report waste in your community and help create a cleaner environment
                    while supporting underprivileged families.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary" onClick={handleReportClick}>
                        Report Waste Now
                    </button>
                    <button className="btn-secondary">Learn More</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/api/placeholder/600/400" alt="Eco-friendly waste management" />
            </div>
        </section>
    );
}

export default Hero;