import "./product-section.css";
import ProductCard from "./ProductCard";
import HeadphoneImg from "./Headphone.png"
import SpeakerImg from "./Speaker.png"
import EarphonesImg from "./earphone.png"

export type ProdType = {
  name: string;
  link: string;
  img: string;
};

const products: ProdType[] = [
  {
    name: "HEADPHONES",
    link: "/products/headphones",
    img: HeadphoneImg,
  },
  {
    name: "Speakers",
    link: "/products/speakers",
    img: SpeakerImg,
  },
  {
    name: "Earphones",
    link: "/products/earphones",
    img: EarphonesImg,
  },
];

const ProductSection = () => {
  return (
    <section className="products-section">
      <div className="container products-section-container">
        {products.map((prod) => {
          return <ProductCard key={prod.link} prod={prod} />;
        })}
      </div>
    </section>
  );
};

export default ProductSection;