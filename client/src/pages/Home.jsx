import React, { useEffect } from "react";
import Header from "../components/jsx/Header";
import Hero from "../components/jsx/Hero";
import Features from "../components/jsx/Features";
import Footer from "../components/jsx/Footer";

const Home = () => {
  // Implement intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with the fade-in class
    document.querySelectorAll(".section-fade-in").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;