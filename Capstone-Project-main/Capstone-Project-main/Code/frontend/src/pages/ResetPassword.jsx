import React, { useState } from "react";
import styled from "styled-components";
import { useResetPasswordMutation, useSignInMutation } from "../api/authenticate";
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect } from "react";
import swal from "sweetalert";


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
  width: max-content;
`;
const Link = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ResetPassword = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const [userData, setUserData] = useState({
        email: searchParams.get('email'),
        token: searchParams.get("token")
    });
    const [resetPasswordData, { isLoading }] = useResetPasswordMutation();

    const handleSubmit = () => {
        resetPasswordData(userData).then((res) => {
            if (res.error) return alert(res.error.data);
            swal("Info!", `The password is rest`, "success").then(() => {
                navigate("/signin");
            });
        });
    };

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <Container>
            <Wrapper>
                <Title>Reset Password</Title>
                <Form>
                    <Input
                        type='password'
                        placeholder="New Password"
                        onChange={(e) =>
                            setUserData({ ...userData, password: e.target.value })
                        }
                    ></Input>
                    <Button onClick={handleSubmit}>Reset</Button>
                    <Link>
                        <a href="/forgot-password">
                            FORGOT PASSWORD?</a></Link>
                    <Link>
                        <a href="./register">CREATE A NEW ACCOUNT</a>
                    </Link>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default ResetPassword;
