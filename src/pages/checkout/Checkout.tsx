import { useState } from "react";
import Modal from "react-modal";
import Input from "../../components/ui/input/Input";
import { Link } from "react-router-dom";
import GoBackButton from "../../components/GoBack/goback";
import Footer from "../../components/footer/Footer";
import './style.css'
import iconImg from "../checkout/icon.png"
import { useContext } from "react";
import { CartConntext, cartItemType } from "../../context/CartContext";
import shapeImg from "../checkout/Shape.png"
import CheckoutProductItem from "./checkout-item/checkoutItem";
import { useForm } from "react-hook-form";
import Button from "../../components/ui/button/Button";

type FormData = {
  name: string;
  email: string;
  superHero: string;
  phoneNumber: number;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  eMouneyNumber: number;
  eMoneyPin: number;
};
const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [paymentMethod, setPayementMethod] = useState<"e-money" | "cash">(
    "e-money"
  );
    const { cart } = useContext(CartConntext) || { cart: [] };

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();
  
    const onSubmit = (data: FormData) => {  
      setIsOpen(true);
    };

  return (
    <div style={{backgroundColor:'#f2f2f2'}}>
    
        <div className="container">
          <GoBackButton/>

        <div className="checkout-detail">
        <form
          noValidate={true}
          onSubmit={handleSubmit(onSubmit)}
          className="checkout-content"
        >
        <div className="checkout">
            <div className="text">
              checkout
            </div>
            <div className="details">
              <span>Billing Details</span>
              <div className="inputs">
                  <div className="first">

                  <Input
                  label={"Name"}
                  placeholder="Enter Your Name"
                  type="text"
                  {...register("name", {
                    required: "Enter Name !!!",
                   
                  })}
                  isError={Boolean(errors.name)}
                  errMsg={errors.name?.message}
                />
                    <Input
                  label={"Email"}
                  placeholder="Enter Your Email"
                  type="email"
                  {...register("email", {
                    required:  "wrong format!!!",
                    pattern: {
                      value:
                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                      message: "wrong format",
                    },
                  })}
                  isError={Boolean(errors.email)}
                  errMsg={errors.email?.message}
                />
                  </div>
                  <div className="second">
                  <Input
                  label={"Phone Number"}
                  placeholder="+1 (202) 555-0136"
                  type="number"
                  {...register("phoneNumber", {
                    required: "Enter phone number !!!",
                  })}
                  isError={Boolean(errors.phoneNumber)}
                  errMsg={errors.phoneNumber?.message}
                />
                  </div>

                <span>SHIPPING INFO</span>  
                <div className="third">
                <Input
                  label={"Address"}
                  placeholder="1137 Williams Avenue"
                  type="text"
                  {...register("address", {
                    required: "Enter address !!!",
                  })}
                  isError={Boolean(errors.address)}
                  errMsg={errors.address?.message}
                />
                </div>
                <div className="first">
                <Input
                  label={"ZIP Code"}
                  placeholder="03333"
                  type="text"
                  {...register("zipCode", {
                    required: "Enter zip code !!!",
                  })}
                  isError={Boolean(errors.zipCode)}
                  errMsg={errors.zipCode?.message}
                />
                   <Input
                  label={"City"}
                  placeholder="New york"
                  type="text"
                  {...register("city", {
                    required: "Enter city !!!",
                  })}
                  isError={Boolean(errors.city)}
                  errMsg={errors.city?.message}
                />
                </div>
                <div className="second">
                <Input
                  label={"Country"}
                  placeholder="unitied States"
                  type="text"
                  {...register("country", {
                    required: "Enter country !!!",
                  })}
                  isError={Boolean(errors.country)}
                  errMsg={errors.country?.message}
                />

                </div>
                <span>PAYMENT DETAILS</span>
                <div className="payment">
                  <div style={{color:'black',fontSize:'12px',fontWeight:'bold',width:'50%'}}>Payment Method</div>
                  <div style={{display:"flex",flexDirection:'column', gap:'1rem',width:'50%'}}>
                  <Input 
                    name="payement-method"
                    label={"e-Money"}
                    type="radio"
                    checked={paymentMethod === "e-money"}
                    onChange={() => setPayementMethod("e-money")}
                  />
                   <Input
                    name="payement-method"
                    checked={paymentMethod === "cash"}
                    label={"Cash on Delivery"}
                    type="radio"
                    onChange={() => setPayementMethod("cash")}
                  />

                  </div>
                </div>

                {paymentMethod === "e-money" ? (
                  <div className="first">
                    <Input
                      label={"e-Money Number"}
                      placeholder="324233423"
                      type="number"
                      {...register("eMouneyNumber", {
                        required: "Enter eMouneyNumber !!!",
                      })}
                      isError={Boolean(errors.eMouneyNumber)}
                      errMsg={errors.eMouneyNumber?.message}
                    />
                    <Input
                      label={"e-Money PIN"}
                      placeholder="38673"
                      type="number"
                      {...register("eMoneyPin", {
                        required: "Enter eMoneyPin !!!",
                      })}
                      isError={Boolean(errors.eMoneyPin)}
                      errMsg={errors.eMoneyPin?.message}
                    />
                  </div>
                ) : null}

                
              </div>
            </div>
            {paymentMethod === "cash" && (
              <footer className="checkout-form-footer">
                <img src={shapeImg} alt="shape" />
                <div style={{color:"#979797"}}>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </div>
              </footer>
            )}
          </div>
          <div className="summary">
          <section className="checkout-product-item-container">
              {cart.map((item) => {
                return <CheckoutProductItem item={item} />;
              })}
            </section>
            
            <div className="total">
            <b >
                Total :
            </b>
              <div className="amount" >$ {cart.reduce(
                ( sum : number, item : cartItemType) => sum + item.product.price * item.amount,
              0
            )}</div>
            </div>
            <div className="shipping">
              <b >shiping</b>
              <div className="amount">$50</div>
            </div>
            <div className="vat">
              <b>vat (included)</b>
              <div className="amount">$1079</div>
            </div>
            <div className="grand">
              <b>grand total</b>
              <span style={{fontSize:'18px',fontWeight:'bold'}}>
              ${cart.reduce((sum: number, item: cartItemType) => sum + item?.product.price * item?.amount + 50, 0)}
              </span>

            </div>
            <div style={{display: 'flex', justifyContent:'center',marginTop: '2rem'}}>
              <Button variant="primary" className="btn btn-primary">
                  CONTINUE AND PAY
                </Button>

            </div>
            

          
            
          </div>
          </form>
          
              <Modal
            closeTimeoutMS={500}
            onRequestClose={() => setIsOpen(false)}
            shouldCloseOnOverlayClick={true}
            shouldReturnFocusAfterClose={true}
            isOpen={modalIsOpen}
            // onAfterOpen={() => (document.body.style.overflow = "hidden")}
            // onAfterClose={() => (document.body.style.overflow = "auto")}
      
            className="checkout-modal"

            
          >
            <div style={{marginBottom: '30px'}}>
              <img src={iconImg} alt="icon" />
            </div>
            <div className="thank">
              thank you <br/>for your order
            </div>
            <div className="message">You will receive an email confirmation shortly.</div>
            <section className="thank-modal">
              <div className="left-aside">
                {cart.filter((_, index) => (showAll ? true : index === 0))
                .map((item : cartItemType) => (
                  <div key={item.product.id}
                  className="left-aside-item">
                    <div style={{color:'black' , display:'flex',}}>
                      <img style={{border: 'none', backgroundColor:'transparent'}}
                      width={65}
                      height={65}
                      src={`./${item.product?.categoryImage.desktop}`}
                      alt="product"/>
                    </div>
                    <div className="detail">
                    <div className="thank-item">
                      <div style={{color:'black', fontWeight:'bold'}}>
                        {item.product.name.split(' ').slice(0, -1).join(' ')}
                      </div>
                      <b>${item.product.price}</b>  
                    </div> 
                    <b>x{item.amount}</b>

                    </div>
                  </div>
                ))
                }
                <div className="item-line">

                </div>
               
                 <button className="show-btn"
                  onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show less" : `and ${cart.length - 1} other items(s)`}
          </button>
              </div>
              <div className="right-aside">
              <b>grand total</b>
              <div className="grand-price">
                ${cart.reduce((sum :number, item:cartItemType) => sum + item.product.price * item.amount, 0)}
              </div>
                
            </div>  
            </section>
            <div className="thank-link">
              <Button className="thank-btn"
              isLink= {true} to="/">
                BACK TO HOME
              </Button>

            </div>
           
          
          </Modal>
           </div>
       
        </div>
    
      <Footer/>
    </div>
    
  
    
    );
};


export default Checkout;