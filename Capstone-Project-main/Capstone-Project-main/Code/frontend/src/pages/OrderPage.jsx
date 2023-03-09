import { Chip, CircularProgress, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from '../components/Navbar';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { useGetOrdersByUserMutation } from '../api/orders';

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
    }
}));

const OrdersPage = () => {

    const navigate = useNavigate();
    const classes = useStyles();
    const [orders, setOrders] = useState([]);
    const [getOrders, { isLoading }] = useGetOrdersByUserMutation();

    const rows = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
        { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com' },
    ];


    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        getOrders(user._id).then((res) => {
            console.log(res, "asdfasdfa");
            setOrders(res.data)
        })
    }, []);



    return (
        <>
            <Container>
                <Navbar />
                <Container maxWidth="md" className={classes.root}>
                    <Typography variant="h4" gutterBottom>
                        My Orders
                    </Typography>
                    {isLoading &&
                        <CircularProgress />
                    }
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Items</TableCell>
                                    <TableCell>Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders && orders.map((row) => (
                                    <TableRow key={row._id}>
                                        <TableCell>{row._id}</TableCell>
                                        <TableCell>
                                            {row.items.map((item) => (
                                                <>
                                                    <Chip label={`${item.quantity} x ${item.title}`} variant="outlined" />
                                                    &nbsp;
                                                </>
                                            ))
                                            }
                                        </TableCell>
                                        <TableCell>${row.totalAmount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </Container >
        </>
    );
};

export default OrdersPage;
