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
import data from "../data/data.json"
import { Other } from "./Products";

const products: ProductType[] = [];

const Product = () => {
  const { productId} = useParams();
  const { cart, updateCart } = useContext(CartConntext) as cartContextType;
  const item = cart.find((item) => item.product.id === productId);
  const [num, setNum] = useState(() => {
    if (item) return item.amount;
    return 0;
  });

  const products = data.products

  const others = products.map((other) => other.others?.map((ot) => ot.slug))
  
  
  console.log(others)

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

  const findProductBySlug = (slug: string) => {
    return products.find((product) => product.slug === slug);
  };

  // Debugging: log the data
  console.log("Products:", products);
  console.log("Current Product Others:", prod?.others);
  const renderedSlugs = new Set<string>();



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
  
                      {prod?.others.map((other: Other, index) => {
                          const matchingProduct = findProductBySlug(other.slug);
                          if (matchingProduct && !renderedSlugs.has(other.slug)) {
                            renderedSlugs.add(other.slug);
                        return (
                          <div key={`${other.slug}-${index}` }  className="other-container" >
                            <div className="other-images">
                              <img src={`/${other.image.desktop}`} alt="product" />

                            </div>
                            <div className="others-name">{other.name}</div>

                          <div className="other-button">
                            <Button isLink={true} variant="primary" to={`/products/${prod.category}/${matchingProduct.id}`}>
                              See Product
                            </Button>

                          </div>
                          </div>
                        );
                    }
                    return null;
                  })}
                  
            
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