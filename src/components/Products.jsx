import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
            // "http://localhost:5000/products" //api here
            "https://ecommerce-bags-backend.cyclic.app/products"
        );
        console.log(res.data)
        setProducts(res.data);
      } catch (err) {
        setProducts(0)
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      <Title>BAGS</Title>
      <ProductContainer>
        {
          products===0 ? 
          popularProducts.map((item) => (
            <Product item={item} key={item.id} />
            )):
            products.map((item) => (
              <Product item={item} key={item._id} />
              ))}
      </ProductContainer>
    </Container>
  );
};

export default Products;