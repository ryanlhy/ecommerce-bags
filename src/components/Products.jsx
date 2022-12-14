import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

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
        {
        products===0 ? 
        popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        )):
        products.map((item) => (
          <Product item={item} key={item._id} />
        ))}
    </Container>
  );
};

export default Products;