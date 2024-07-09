// import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import ProductSection from "../components/product-section/ProductSection";
import "./products.css";
import ContentSection from "../components/content-section/contentSection";
import Footer from "../components/footer/Footer";
import Button from "../components/ui/button/Button";

export interface ProductType {
  id: string;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: Include[];
  gallery: Gallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Gallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Include {
  quantity: number;
  item: string;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

const Products = () => {
  const { productName } = useParams();

  const getData = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    return data;
  };

  const { data } = useQuery<ProductType[]>({
    queryKey: ["products", productName],
    queryFn: getData,
  });

  return (
    <>
      <div className="title"
        style={{
          height: '250px',
          background: 'rgb(12, 12, 12)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{
          fontSize: '40px',
          fontWeight: 'bold',
          letterSpacing: '1.43px',
          lineHeight: '44px',
          textTransform: 'uppercase'
        }}>
          {productName}
        </div>
      </div>
      <div className="container">
        {data
          ?.filter((prod: ProductType) => prod?.category === productName)
          .map((prod, index) => {
            const { categoryImage, description, id, name,  } = prod;
            const isReversed = index % 2 === 0;

            return (
              <div key={id} className={`product-container ${isReversed ? 'reverse' : ''}`}>
                {isReversed ? (
                  < >
                   <div className="left-section ">
                      <img
                        src={`http://localhost:5173/${categoryImage.desktop}`}
                        alt="products"
                      />
                    </div>
                    <div className="right-section ">
                      <div className="description">
                        {index === 0 && <h3>New Product</h3>}
                        <div className="text" style={{ width: "300px" }}>{name}</div>
                        <p style={{ color: "#979797" }}>{description}</p>
                        <div className="button-link">
                        <button className="btn btn-primary" type="button">
                          <Link style={{
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            fontSize: '10px'
                          }}
                            to={`/products/${productName}/${prod.id}`}>
                            See product
                          </Link>
                        </button>
                    </div>
                      </div>
                    </div>
                   
                  </>
                ) 
                : 
                (
                  <>
                   <div className="right-section">
                      <div className="description">
                        {index === 0 && <h3>New Product</h3>}
                        <div className="text" style={{ width: "300px" }}>{name}</div>
                        <p style={{ color: "#979797" }}>{description}</p>
                        <div className="button-link">
                        <button className="btn btn-primary" type="button">
                          <Link style={{
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            fontSize: '10px'
                          }}
                            to={`/products/${productName}/${prod.id}`}>
                            See product
                          </Link>
                        </button>
                    </div>
                        
                        
                  
                      </div>
                    </div>
                    <div className="left-section">
                      <img
                        src={`http://localhost:5173/${categoryImage.desktop}`}
                        alt="products"
                      />
                    </div>
                   
                  </>
                )
                }
              </div>
            );
          })}
      </div>

      <ProductSection />
      <ContentSection />
      <Footer />
    </>
  );
};

export default Products;
