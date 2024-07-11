// import { useParams } from "react-router-dom"
// import { useQuery } from "react-query";
// import { ProdType } from "../../components/product-section/ProductSection";
// import { ProductType } from "../../pages/Products";

// const Other =() => {
//     const { products } = useParams();

//     const getData = async () => {
//       const res = await fetch("http://localhost:3000/products");
//       const data = await res.json();
//       return data;
//     };
  
//     const { data } = useQuery<ProductType[]>({
//       queryKey: ["products", products],
//       queryFn: getData,
//     });

//       console.log(data)
//     return (

//         <div>
//             {data.filter((prod : ProductType) => prod?.other )}
         
//         </div>
//     )

// }

// export default Other