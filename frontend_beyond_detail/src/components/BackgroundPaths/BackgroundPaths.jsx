import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import GoogleReviewsCarousel from "../GoogleReviewsCarousel/GoogleReviewsCarousel";
import "./BackgroundPaths.scss";

export function BackgroundPaths({
  title = "Window Tint",
  scrollTarget = "#contact",
  description = "Professional automotive services in Toronto. We provide premium quality services with expert installation, exceptional customer service, and a commitment to excellence that goes beyond detail.",
}) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["QUALITY", "PREMIUM", "PROFESSIONAL"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="background-paths__hero">
      <div className="background-paths__content">
        <div className="background-paths__container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="background-paths__inner"
          >
            {/* Top Button */}
            <div className="background-paths__top-button-wrapper">
              <a 
                href={scrollTarget} 
                className="background-paths__top-button"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(scrollTarget);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <span>Explore Our Services</span>
                <ArrowRight className="background-paths__icon" />
              </a>
            </div>

            {/* Title Section */}
            <div className="background-paths__title-section">
              <h1 className="background-paths__main-title">
                <span className="background-paths__title-static">Experience</span>
                <span className="background-paths__title-animated">
                  &nbsp;
                  {titles.map((title, index) => {
                    const letterCount = title.length;
                    const fontSize = letterCount > 5 ? `${(5 / letterCount) * 100}%` : "100%";
                    return (
                      <motion.span
                        key={index}
                        className="background-paths__title-word"
                        style={{ fontSize }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? -150 : 150,
                                opacity: 0,
                              }
                        }
                      >
                        {title}
                      </motion.span>
                    );
                  })}
                </span>
                <span className="background-paths__title-static">{title}</span>
              </h1>

              {/* Description */}
              <p className="background-paths__description">
                {description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="background-paths__actions">
              <a 
                href="#contact" 
                className="background-paths__action-button background-paths__action-button--outline"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <span>Book a Call</span>
                <Phone className="background-paths__icon" />
              </a>
              <a 
                href={scrollTarget} 
                className="background-paths__action-button background-paths__action-button--primary"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(scrollTarget);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <span>Get Started</span>
                <ArrowRight className="background-paths__icon" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Reviews Carousel Below Hero */}
        <div className="background-paths__reviews">
          <GoogleReviewsCarousel />
        </div>
      </div>
    </div>
  );
}

export default BackgroundPaths;










