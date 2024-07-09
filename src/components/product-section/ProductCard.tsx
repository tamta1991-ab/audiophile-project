import { ProdType } from "./ProductSection";
import Button from "../ui/button/Button";
import { MenuModalProps } from "../menu-modal/menuModal";

type Props = {
  prod: ProdType;
  
};

const ProductCard = ({ prod }: Props,{ modalIsOpen} : MenuModalProps ) => {
  return (
    <article className="product-card">
      <img src={prod.img} alt="" />
      <h5>{prod.name}</h5>

      <Button to={prod.link} variant="link" isLink={true} onClick={() => modalIsOpen= false}>
        SHOP
      </Button>
    </article>
  );
};

export default ProductCard;