import { useContext } from "react";
import Modal from "react-modal";
import { CartConntext, cartContextType } from "../../context/CartContext";
import CartItem from "../cartitem/CartItem";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import './style.css'

type Props = {
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartComponent = ({ modalIsOpen, setIsOpen }: Props) => {
  const { cart, updateCart, clearCart } = useContext(
    CartConntext
  ) as cartContextType;

  const handleCloseModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <Modal
      className="cart-modal"
      onRequestClose={() => setIsOpen(false)}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      isOpen={modalIsOpen}
      onAfterOpen={() => (document.body.style.overflow = "hidden")}
      onAfterClose={() => (document.body.style.overflow = "auto")}
    >
    <div className="modal-title" >
        <p className="cart">
            Cart ({cart.length})
        </p>
        {cart.length > 0 ? (
          <button className="clear"
          onClick={() => clearCart()}>
            Remove All
        </button>) : null}
    </div>

      <div >
        {cart.map((item) => {
          return <CartItem updateCart={updateCart} item={item} />;
        })}
      </div>
      <div className="price-sum">
        <b style={{
            color: '#979797',
            fontSize:'15px',
            textTransform:'uppercase',
            lineHeight:'25px',
            letterSpacing:'1px'

        }}>
            Total
        </b>
        <p 
            style={{fontSize:'15px',fontWeight: 'bold'}}>
            ${cart.reduce((sum, item) => sum + item.product?.price * item?.amount,
            0)}
        </p>
      </div>
      <div style={{ display: "flex", 
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      textAlign: 'center'
      
      }}>
        <button 
        className="btn-primary"
        style={{
            textAlign: 'center', 
            marginBottom:'20px' ,
            padding : "15px 170px 15px 120px",
            textTransform:'uppercase',
            letterSpacing: '1px',
            fontSize: '13px',
            fontWeight:'bold', 
            
        }}
        type="button"
        onClick={handleCloseModal}>            
             <Link
             style={{
                 textDecoration: 'none' 

             }}
              to="/checkout">checkout</Link>
        </button>
        
      </div>
    </Modal>
  );
}; 

export default CartComponent;