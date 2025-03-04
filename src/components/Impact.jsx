import React from "react";

function Impact() {
    return (
        <section id="impact" className="impact">
            <h2 className="section-title">Our Impact</h2>
            <div className="impact-stories">
                <div className="story">
                    <img src="/api/placeholder/300/200" alt="Community story" />
                    <h3>Empowering Local Communities</h3>
                    <p>
                        Through our waste collection program, we've created jobs for 50+ individuals
                        from underprivileged backgrounds.
                    </p>
                </div>
                <div className="story">
                    <img src="/api/placeholder/300/200" alt="Recycling story" />
                    <h3>Turning Plastic into Products</h3>
                    <p>
                        Collected plastic waste is transformed into affordable household items for
                        families in need.
                    </p>
                </div>
                <div className="story">
                    <img src="/api/placeholder/300/200" alt="Environment story" />
                    <h3>Cleaner Neighborhoods</h3>
                    <p>
                        Over 200 communities have seen significant reduction in illegal dumping since
                        our program began.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Impact;  