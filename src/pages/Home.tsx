import { ChangeEvent, useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import ProductsSection from "../components/product-section/ProductSection";
import SpeakerSection from "../components/speaker-section/SpeakerSection"
import Speaker from "../components/speaker7-section/speaker";
import Earphone from "../components/earphones-section/earphone";
import Footer from "../components/footer/Footer";
import ContentSection from "../components/content-section/contentSection";

const Home = () => {

  return (
    <>
      <Hero />
      <ProductsSection />
      <SpeakerSection />
      <Speaker />
      <Earphone />
      <ContentSection />
      <Footer />
    
    </>
  );
};

export default Home;