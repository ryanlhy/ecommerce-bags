import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const quantity = useSelector(state=>state.cart.quantity);
  const email = useSelector(state=>state.user.email);

  const handleLogout = () => {
    console.log("logout");
    dispatch(logout())
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* add anything you need here */}
        </Left>
        <Center>
          <Link to ="/" style={{textDecoration: 'none'}}>
            <Logo>BAGS.</Logo>
          </Link>
        </Center>
        <Right>
          {email === "" ? 
            <>
              <Link to ="/login" style={{textDecoration: 'none'}}>
                <MenuItem>SIGN IN</MenuItem>
                </Link>
              <Link to ="/register" style={{textDecoration: 'none'}}>
                <MenuItem>REGISTER</MenuItem>
              </Link> 
            </>
            : 
            <>
              <MenuItem>{"Hi, " + email}</MenuItem>
              <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
            </>
          }
          <Link to="/cart">
          <MenuItem>
            <Badge overlap="rectangular" badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
