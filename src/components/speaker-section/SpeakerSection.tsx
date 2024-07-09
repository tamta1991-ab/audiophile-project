import "./speaker-section.css";
import SpeakerImg from "../../assets/home/desktop/image-speaker-zx9.png";
import CirclesImg from "../../assets/home/desktop/pattern-circles.svg";
import Button from "../ui/button/Button";

const SpeakerSection = () => {
  return (
    <section className="speaker-section">
      <div className="container speaker-section-container">
        <img src={SpeakerImg} className="speaker-img" alt="speaker" />
        <img src={CirclesImg} className="circle-img" alt="circle" />

        <div className="speaker-section-content">
          <div className="speaker-name">
            ZX9 SPEAKER</div>
          <h5>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </h5>

          <Button to="./products/speakers/6" isLink={true} variant="dark">
            See Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;