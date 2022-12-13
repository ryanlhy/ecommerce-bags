import { useDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { loginSuccess } from "../redux/userRedux";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      name: name,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    }
    console.log("handleCreateUser");
    console.log(formData);


    try {
      const res = await publicRequest.post("https://ecommerce-bags-backend.cyclic.app/users", formData);
      dispatch(loginSuccess(formData.name));
      history("/");
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <>
    <Navbar/>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Input onChange={(e) => setName(e.target.value)} placeholder="name" />
          <Input onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
          <Input onChange={(e) => setUsername(e.target.value)} placeholder="username" />
          <Input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
          <Input onChange={(e) => setPassword(e.target.value)} placeholder="password" />
          <Input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
    </>
  );
};

export default Register;
