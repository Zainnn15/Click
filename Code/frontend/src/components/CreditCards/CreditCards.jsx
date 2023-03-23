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

  // Define initial state for form field errors
  const [formErrors, setFormErrors] = useState({
    number: false,
    name: false,
    expiry: false,
    cvc: false,
  });

  // Handle changes to form fields
  const handleFormChange = (event) => {
    // Clear error message when user starts typing
    setFormErrors({
      ...formErrors,
      [event.target.name]: false,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check for required fields
    let errors = {
      number: !number,
      name: !name,
      expiry: !expiry,
      cvc: !cvc
    };    
    setFormErrors(errors);
    // Submit form if no errors
    if (Object.values(errors).every((value) => !value)) {
      props.onCardSubmit({ number, name, expiry, cvc });
    }
  };

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
          onChange={(e) => { setNumber(e.target.value); handleFormChange(e) }}
          onFocus={(e) => setFocus(e.target.name)}
          name="number"
          error={formErrors.number}
          helperText={formErrors.number ? 'This field is required' : ''}
        />
      </Grid>

      <Grid item>
        <TextField
          label="Cardholder Name"
          variant="outlined"
          fullWidth
          onChange={(e) => { setName(e.target.value); handleFormChange(e) }}
          onFocus={(e) => setFocus(e.target.name)}
          name="name"
          error={formErrors.name}
          helperText={formErrors.name ? 'This field is required' : ''}
        />
      </Grid>

      <Grid item>
        <TextField
          label="Expiry Date"
          variant="outlined"
          fullWidth
          onChange={(e) => { setExpiry(e.target.value); handleFormChange(e) }}
          onFocus={(e) => setFocus(e.target.name)}
          name="expiry"
          error={formErrors.expiry}
          helperText={formErrors.expiry ? 'This field is required' : ''}
        />
      </Grid>

      <Grid item>
        <TextField
          label="CVC"
          variant="outlined"
          fullWidth
          onChange={(e) => { setCvc(e.target.value); handleFormChange(e) }}
          onFocus={(e) => setFocus(e.target.name)}
          name="cvc"
          error={formErrors.cvc}
          helperText={formErrors.cvc ? 'This field is required' : ''}
        />
      </Grid>

      <Grid container spacing={1} justify="center" direction="column">
        <Grid item>
          <TopButton type='filled' variant="contained" color="primary" onClick={handleSubmit}>
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
