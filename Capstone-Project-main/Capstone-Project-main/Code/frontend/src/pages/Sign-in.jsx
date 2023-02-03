import React, { useState } from "react";
import styled from "styled-components";
import { useSignInMutation } from "../api/authenticate";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.imgur.com/lDAcE4w.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.div`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const SignIn = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState(null);
  const [signInData, { isLoading }] = useSignInMutation();
  const handleSignIn = () => {
    signInData(userData).then((res) => {
      if (res.error) return alert(res.error.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/")
    });
  };

  useEffect(()=>{
    localStorage.clear()
  },[])

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          ></Input>
          <Input
            placeholder="Password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          ></Input>
          <Button onClick={handleSignIn}>LOGIN</Button>
          <Link>FOTGOT PASSWORD?</Link>
          <Link>
            <a href="./register">CREATE A NEW ACCOUNT</a>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
