import { useParams } from "react-router-dom";
import  { ProductType} from "./Products";
import { useContext, useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import NumberInput from "../components/ui/number-input/NumberInput";
import { CartConntext, cartContextType } from "../context/CartContext";
import Button from "../components/ui/button/Button";
import ContentSection from "../components/content-section/contentSection";
import Footer from "../components/footer/Footer";
import GoBackButton from "../components/GoBack/goback";
import ProductSection from "../components/product-section/ProductSection";
import { useQuery } from "react-query";


const Product = () => {
  const { productId} = useParams();
  const { cart, updateCart } = useContext(CartConntext) as cartContextType;
  const item = cart.find((item) => item.product.id === productId);
  const [num, setNum] = useState(() => {
    if (item) return item.amount;
    return 0;
  });



  const getData = async () => {
    const res = await fetch("http://localhost:3000/products/" + productId);
    const data = await res.json();

    return data;
  };
  const { data: prod } = useQuery<ProductType>({
    queryKey: ["product", productId],
    queryFn: getData,
  });

  useEffect(() => {
    if (item?.amount) {
      setNum(item.amount);
    }
  }, [item?.amount]);

  return (
    <>
    
      <div className="container">
        <div className="goback">
        <GoBackButton/>
        </div>
        <div className="product-item">
          <div className="product-item-container">
            <div className="item-left-section">
              <img
                src={`/${prod?.categoryImage.desktop}`}
                alt="product"
                />
            </div>
            <div className="item-right-section">
              <h3>new product</h3>
              <div className="text">{prod?.name}</div>
              <p className="desc-container">{prod?.description}</p>
              <div style={{color:'black', fontWeight:'bold',fontSize:'18px', letterSpacing:'1,29px',marginBottom: '3rem'}}>
                $ {prod?.price}
              </div>
              <div className="btn-add">
                <NumberInput minNum={1} num={num} setNum={setNum} />
                {prod &&
                  (num !== item?.amount ? (
                    <Button onClick={() => updateCart(num, prod)}>ADD TO CART</Button>
                    ) : null)}
              </div>
            </div>
          
          </div>
          <div className="descriptions" style={{color:'black'}}>
            <div className="features">
              <div className="text">features</div>
              <div className="features-text">
              {prod?.features}
                </div>
        
            </div>
            <div className="includes">
              <p className="text">
                in the box
              </p>
              <div className="includes-quantity">
                {prod?.includes.map(include => (
                  <div className="quantity" key={include.item}>
                    <span>{include.quantity}x</span>
                    <div className="detail">
                      {include.item}
                    </div>
                  </div>
                ))}

              </div>
        
            </div>

          </div>
          <div className="images">
            <div className="left">

              <img
                src={`/${prod?.gallery.first.desktop}`}
                alt="product"
                />
              <img
                src={`/${prod?.gallery.second.desktop}`}
                alt="product"
                />
            </div>
            <div className="right-img">
              <img
              src={`http://localhost:5173/${prod?.gallery.third.desktop}`}
              alt="product"
              />
            </div>
          </div>
          <div className="others-section">
            <div className="like">you may like</div>

            <div className="others">
              <div className="others-cont">
                {prod?.others.map((product) => (
                  <div key={product.slug}>
                    <div className="others-item-image">
                      <img
                      
                        src={`/${product.image.desktop}`}
                        alt={product.name}
                      />

                    </div>
                    <div className="others-item">
                      <div className="others-name">{product.name}</div>
                    <div>
                        {product.slug.includes('headphones') ? (
                          <Button isLink={true} variant="primary" to={`/products/headphones`}>
                            See Product
                          </Button>
                        ) : product.slug.includes('speaker') ? (
                          <Button isLink={true} variant="primary" to={`/products/speakers`}>
                            See Product
                          </Button>
                        ) : product.slug.includes('earphones') ? (
                          <Button isLink={true} variant="primary" to={`/products/earphone`}>
                            See Product
                          </Button>
                        ) : null}
                    </div>

                    </div>
            </div>
    
        
      ))}
    </div>
            </div>

          
          </div>

        </div>
      </div>
        <ProductSection/>
        <ContentSection />
        <Footer/>
    </>
    
    
    );
  };

export default Product;