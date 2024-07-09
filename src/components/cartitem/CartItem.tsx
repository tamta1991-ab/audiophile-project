import { cartItemType } from "../../context/CartContext";
import NumberInput from "../ui/number-input/NumberInput";
import { ProductType } from "../../pages/Products";
import './style.css'
export type Props = {
  item: cartItemType;
  updateCart: (num: number, prod: ProductType) => void;
};

const CartItem = ({ item, updateCart }: Props) => {
  return (
    <>
      <div
        className="inner-product-container"
        style={{
          display: "flex",
          justifyContent:'space-between',
          alignItems: "center",
          gap: 16,
          margin: "30px 0",
        }}
      >
        <img style={{borderRadius:'5px'}}
          width={65}
          height={65}
          src={`/${item.product?.categoryImage.desktop}`}
          alt=""
        />
        <div className="item-descrip">
          <b style={{ fontSize:'15px',color:'black'}}>
            {item.product?.name}
            </b>
          <span style={{
              color:'#979797 ',
              fontWeight: 'bold'
          }}>${item.product?.price}</span>
          </div>
        <div className="item-btn"
        style={{
          width:'96px'
        }}>
          <NumberInput
            minNum={0}
            num={item.amount}
            setNum={(num: number) => updateCart(num, item.product)}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
