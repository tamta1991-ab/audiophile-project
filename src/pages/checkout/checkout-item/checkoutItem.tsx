import { cartItemType } from "../../../context/CartContext";
import { CartConntext } from "../../../context/CartContext";
import "./style.css"

type Props = {
    item : cartItemType
}

const CheckoutProductItem = ({item } : Props) => {

    return (
        <section className="checkout-product-item">
        <img src={`./${item.product.categoryImage.desktop}`} alt="product" />
        <div className="items-info">
            <div className="info-div">
            <div>{item.product.name.split(" ").slice(0, -1).join(" ")}</div>
            <b className="price">{item.product.price}</b>
            </div>
            <b>x{item.amount}</b>

        </div>
      </section>
    )
}

export default CheckoutProductItem