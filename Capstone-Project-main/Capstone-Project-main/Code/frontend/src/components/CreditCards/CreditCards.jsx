import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { TextField, Button, Grid } from "@material-ui/core";
import styled from "styled-components";

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "non"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const CreditCards = (props) => {

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <Grid container spacing={1} justify="center" direction="column">
      <Grid item>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </Grid>


      <Grid item>
        <TextField
          label="Card Number"
          variant="outlined"
          fullWidth
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          name="number"
        />
      </Grid>

      <Grid item>
        <TextField
          label="Cardholder Name"
          variant="outlined"
          fullWidth
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          name="name"
        />
      </Grid>

      <Grid item>
        <TextField
          label="Expiry Date"
          variant="outlined"
          fullWidth
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          name="expiry"
        />
      </Grid>

      <Grid item>
        <TextField
          label="CVC"
          variant="outlined"
          fullWidth
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          name="cvc"
        />
      </Grid>

      <Grid container spacing={1} justify="center" direction="column">
        <Grid item>
          <TopButton type='filled' variant="contained" color="primary" onClick={() => props.onCardSubmit({ cvc, expiry, name, number })}>
            Pay Now
          </TopButton>
          &nbsp;
          <TopButton variant="contained" color="primary" onClick={props.handleCloseCardModal}>
            Cancel
          </TopButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCards;
