import { Button, Container, Grid, Modal, Paper, TextField, Typography, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSubmitOrderMutation } from '../api/orders';
import CreditCards from '../components/CreditCards/CreditCards';
import Navbar from '../components/Navbar';
import swal from "sweetalert";
import { clearCart } from '../store/cart';

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "non"};
  background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    form: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    cardImage: {
        width: "80px",
        marginRight: "10px"
    }
}));

const CheckoutPage = () => {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
        alert("Please login first");
        navigate("/signin")
    }

    const dispatch = useDispatch();
    const classes = useStyles();

    const products = useSelector((state) => state.cart.cart);
    const [foodlistData, setfoodlist] = useState([]);
    const [price, setPrice] = useState(0);
    const [submitOrder, { isLoading }] = useSubmitOrderMutation();

    const [openCardModal, setOpenCardModal] = useState(false);
    const handleOpenCreditCardModal = () => {
        setOpenCardModal(true);
    };
    const handleCloseCardModal = () => {
        setOpenCardModal(false);
    };

    useEffect(() => {
        console.log("products", products)
        const price = products.reduce((accumulator, curValue) => {
            return Number(accumulator) + Number(curValue.price * curValue.quantity);
        }, 0);
        setPrice(price);
        console.log("price", price)
        setfoodlist(products);
    }, [products]);

    // Define initial state for form fields
    const [formFields, setFormFields] = useState({
        fullName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        email: '',
        phone: '',
    });

    // Define initial state for form field errors
    const [formErrors, setFormErrors] = useState({
        fullName: false,
        address: false,
        city: false,
        state: false,
        zip: false,
        country: false,
        email: false,
    });

    // Handle changes to form fields
    const handleFormChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.id]: event.target.value,
        });
        // Clear error message when user starts typing
        setFormErrors({
            ...formErrors,
            [event.target.id]: false,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Check for required fields
        let errors = {
            fullName: false,
            address: false,
            city: false,
            state: false,
            zip: false,
            country: false,
            email: false,
        };
        Object.keys(formFields).forEach((key) => {
            if (!formFields[key]) {
                errors[key] = true;
            }
        });
        setFormErrors(errors);
        // Submit form if no errors
        if (Object.values(errors).every((value) => !value)) {
            console.log('Form submitted');
            // TODO: Send form data to server
            console.log(formFields);
            handleOpenCreditCardModal();
        }
    };

    const onCardSubmit = (e) => {
        console.log(e, "onCardSubmit")
        submitOrder({
            card: { ...e },
            ...formFields,
            items: foodlistData,
            amount: price,
            tax: 0.13,
            totalAmount: +(price + price * 0.13).toFixed(2),
            user: user._id
        }).then((res) => {
            console.log(res, "api response 1243");
            localStorage.removeItem("cart")
            swal("Success!", `The order has been placed`, "success").then(() => {
                navigate("/Orders");
            });
            dispatch(
                clearCart()
            );

        })
    }


    return (
        <>
            <Container>
                <Navbar />
                <Container maxWidth="md" className={classes.root}>
                    <Typography variant="h4" gutterBottom>
                        Checkout
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" gutterBottom>
                                Shipping Address
                            </Typography>
                            <TextField
                                required
                                id="fullName"
                                label="Full Name"
                                fullWidth
                                value={formFields.fullName}
                                onChange={handleFormChange}
                                error={formErrors.fullName}
                                helperText={formErrors.fullName ? 'This field is required' : ''}
                            />
                            <TextField
                                required
                                id="address"
                                label="Address"
                                fullWidth
                                value={formFields.address}
                                onChange={handleFormChange}
                                error={formErrors.address}
                                helperText={formErrors.address ? 'This field is required' : ''}
                            />
                            <TextField
                                required
                                id="city"
                                label="City"
                                fullWidth
                                value={formFields.city}
                                onChange={handleFormChange}
                                error={formErrors.city}
                                helperText={formErrors.city ? 'This field is required' : ''}
                            />
                            <TextField
                                required
                                id="state"
                                label="State/Province/Region"
                                fullWidth
                                value={formFields.state}
                                onChange={handleFormChange}
                                error={formErrors.state}
                                helperText={formErrors.state ? 'This field is required' : ''}
                            />
                            <TextField
                                required
                                id="zip"
                                label="Zip / Postal code"
                                fullWidth
                                value={formFields.zip}
                                onChange={handleFormChange}
                                error={formErrors.zip}
                                helperText={formErrors.zip ? 'This field is required' : ''}
                            />
                            <TextField
                                required
                                id="country"
                                label="Country"
                                fullWidth
                                value={formFields.country}
                                onChange={handleFormChange}
                                error={formErrors.country}
                                helperText={formErrors.country ? 'This field is required' : ''}
                            />
                            <br /><br /><br />
                            <Typography variant="h6" gutterBottom>
                                Contact
                            </Typography>
                            <TextField
                                required
                                id="email"
                                label="Email"
                                fullWidth
                                value={formFields.email}
                                onChange={handleFormChange}
                                error={formErrors.email}
                                helperText={formErrors.email ? 'This field is required' : ''}
                            />
                            <TextField
                                id="phone"
                                label="Phone"
                                fullWidth
                                value={formFields.phone}
                                onChange={handleFormChange}
                                error={formErrors.phone}
                                helperText={formErrors.phone ? 'This field is required' : ''}
                            />
                            <TopButton type="filled"
                                variant="contained"

                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                Place Order
                            </TopButton>
                            &nbsp;&nbsp;
                            <TopButton
                                variant="contained"
                                fullWidth
                                className={classes.button}
                                onClick={(e) => navigate("/Cart")}
                            >
                                Back to Cart
                            </TopButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Order Summary
                                    </Typography>
                                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                        {foodlistData.map((product) => {
                                            return (
                                                <>
                                                    <ListItem key={product._id}>
                                                        <ListItemAvatar>
                                                            <img className={classes.cardImage} src={product.img} alt="" />
                                                        </ListItemAvatar>
                                                        <ListItemText primary={product.title} secondary={`${product.quantity} x ${product.price}$ = $${(product.quantity * product.price).toFixed(2)}`} />
                                                    </ListItem>
                                                </>
                                            );
                                        })
                                        }
                                    </List>
                                    <Divider />
                                    <br /><br />
                                    <Typography variant="subtitle1" gutterBottom>
                                        Subtotal: {price}$
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Shipping: Free
                                    </Typography>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Tax (GST): {(price * 0.13).toFixed(2)}$
                                    </Typography>
                                    <Divider />
                                    <br /><br />
                                    <Typography Typography variant="h6" gutterBottom>
                                        Total: ${(price + price * 0.13).toFixed(2)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Container >
            <Modal
                open={openCardModal}
                onClose={handleCloseCardModal}
                className={classes.modal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <div className={classes.paper}>
                    <CreditCards handleCloseCardModal={handleCloseCardModal} onCardSubmit={onCardSubmit} />
                </div>
            </Modal>
        </>
    );
};

export default CheckoutPage;
