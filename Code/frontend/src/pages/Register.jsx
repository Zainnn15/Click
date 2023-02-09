import React, { useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useGetRegisteredMutation } from "../api/authenticate";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 30px;
  width: 40%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 480px) {
    width: 75%;
  } ;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.div`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [getRegister, { isLoading }] = useGetRegisteredMutation();
  const handleSubmit = () => {
    getRegister(userData).then((res) => {
      if (res.error) return swal("Info!", res.error.data, "warning");

      swal("Info!","Registered Successfully", "success").then(() => {
        navigate("/signin");
      });
    });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="first name"
            onChange={(e) =>
              setUserData({ ...userData, firstName: e.target.value })
            }
          />
          <Input
            placeholder="last name"
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
          <Input
            placeholder="username"
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
          <Input
            placeholder="email"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <Input placeholder="password" />
          <Input
            placeholder="confirm password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <Agreement>
            {" "}
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>{" "}
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
