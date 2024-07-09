import "./hero.css";
import Button from "../ui/button/Button";
import heroImg from "./hero.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h4>NEW PRODUCT</h4>
          <h1>XX99 Mark II HeadphoneS</h1>
          <h5>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h5>

          <Button  isLink={true} to="/products/headphones/4" variant="primary" >
            See Product
          </Button>
        </div>
        <div className="right-hero">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;