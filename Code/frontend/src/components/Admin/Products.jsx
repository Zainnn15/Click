import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAddProductMutation, useDeleteProductMutation, useGetProductsMutation, useUpdateProductMutation } from "../../api/products";
import Pagination from 'react-js-pagination';
import '../pagination.css';


import {
  Backdrop,
  Fade, makeStyles, Modal, TablePagination, TextField, Typography
} from "@material-ui/core";
import swal from "sweetalert";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const TdCenter = styled.td`
  text-align: center
`;

const Img = styled.img`
  width: 100px
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "non"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;


const AdminProducts = ({ hasDiscount }) => {
  const [queryCategory, setQueryCategory] = useState("all");
  const [queryPrice, setQueryPrice] = useState("asc");
  const [productsData, setProductsData] = useState();
  const [formTitle, setFormTitle] = useState('Add Product');
  const [data, { isLoading }] = useGetProductsMutation();
  const [addProduct, { isAdding }] = useAddProductMutation();
  const [updateProduct, { isUpdating }] = useUpdateProductMutation();
  const [deleteProduct, { isDeleting }] = useDeleteProductMutation();

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (event, product) => {
    if (product) {
      setFormData({
        _id: product._id,
        title: product.title,
        img: product.img,
        description: product.description,
        category: product.category,
        price: product.price,
        discount: product.discount,
        currentQuantity: product.currentQuantity,
        thresholdQuantity: product.thresholdQuantity,
      })
    } else {
      setFormData({
        _id: '',
        title: '',
        img: '',
        description: '',
        category: '',
        price: 0,
        discount: 0,
        currentQuantity: 0,
        thresholdQuantity: 0
      })
    }
    setOpen(true);
  };

  const handleDelete = (e, product, i) => {
    deleteProduct(product._id).then(response => {
      if (response.error) {
        swal({
          title: response.error.data,
          icon: 'error'
        })
      } else {
        swal({
          title: `Product has been deleted`,
          icon: 'success'
        })
        if (productsData?.products) {
          let index = productsData.products.findIndex(p => p._id == mFormData._id);
          let ps = productsData.products.slice();
          ps.splice(i, 1);
          setProductsData({ ...productsData, products: [...ps] })
        }
      }
    })
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [mFormData, setFormData] = useState({
    _id: '',
    title: '',
    img: '',
    description: '',
    category: '',
    price: 0,
    discount: 0,
    currentQuantity: 0,
    thresholdQuantity: 0
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with mFormData, like send it to an API endpoint
    console.log(mFormData);
    if (mFormData._id) {
      updateProduct(mFormData).then(product => {
        if (product.error) {
          swal({
            title: product.error.data,
            icon: 'error'
          })
        } else {
          swal({
            title: `Product has been updated`,
            icon: 'success'
          })
          if (productsData?.products) {
            let index = productsData.products.findIndex(p => p._id == mFormData._id);
            if (index > -1) {
              let ps = productsData.products.slice();
              ps[index] = product.data;
              setProductsData({ ...productsData, products: [...ps] })
            }
          }
          handleClose();
        }
      })
    } else {
      addProduct(mFormData).then(product => {
        if (product.error) {
          swal({
            title: product.error.data,
            icon: 'error'
          })
        } else {
          swal({
            title: `Product has been added`,
            icon: 'success'
          })
          if (productsData?.products) {
            let ps = productsData.products.slice();
            ps.push(product.data)
            setProductsData({ ...productsData, products: [...ps] })
          }
          handleClose();
        }
      })
    }
  };

  const handleInputChange = (event) => {
    console.log(mFormData);
    const { name, value } = event.target;
    if (typeof value == "string")
      setFormData({ ...mFormData, [name]: value });

  };
  const handlePageChange = (e) => {
    data(`/admin/list?page=${e}`).then((res) => {
      if (res.error) return alert(res.error.data);
      setProductsData(res.data);
    });
  }

  useEffect(() => {
    data(`/admin/list`).then((res) => {
      if (res.error) return alert(res.error.data);
      setProductsData(res.data);
    });
  }, [queryCategory, queryPrice]);
  return (
    <>
      <Container>
        <TopButton onClick={(e) => handleOpen(e, null)} type='filled' variant="contained" color="primary" >
          Add new Product
        </TopButton>
        {isLoading ? (
          <p>Loading....</p>
        ) : productsData?.products?.length === 0 ? (
          <p>No Products</p>
        ) : (
          <>
            <table style={{ width: "100%", marginTop: "20px" }} className="table-striped">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Current Quantity</th>
                  <th>Threshold Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData?.products.map((product, i) => {
                  return (
                    <tr>
                      <TdCenter>{1 + i}</TdCenter>
                      <TdCenter>
                        <Img src={product.img} alt="" />
                      </TdCenter>
                      <TdCenter>{product.title}</TdCenter>
                      <TdCenter>${product.price.toFixed(1)}</TdCenter>
                      <TdCenter>
                        <>
                          {product.currentQuantity || 0}
                          {(product.currentQuantity || 0) <= (product.thresholdQuantity || 0) &&
                            <>
                            <br /><br />
                            <span className="badge-danger">Getting out of stock</span>
                            </>
                          }
                        </>
                      </TdCenter>
                      <TdCenter>{product.thresholdQuantity || 0}</TdCenter>
                      <TdCenter>
                        <TopButton onClick={(e) => handleOpen(e, product)} variant="contained" color="primary">
                          Edit
                        </TopButton>
                        &nbsp;
                        <TopButton onClick={(e) => handleDelete(e, product, i)} type='filled' variant="contained" color="primary" >
                          Delete
                        </TopButton>
                      </TdCenter>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
        {productsData &&
          <>
            <Pagination
              activePage={+productsData?.page || 1}
              itemsCountPerPage={+productsData?.perPage || 10}
              totalItemsCount={productsData?.total || 0}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
            />
          </>
        }
      </Container>

      <div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Typography variant="h5" gutterBottom>
                {formTitle}
              </Typography>
              <form onSubmit={handleSubmit}>
                <div>
                  <TextField

                    id="title"
                    label="Title"
                    name="title"
                    value={mFormData.title}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <TextField

                    id="description"
                    label="Description"
                    name="description"
                    value={mFormData.description}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextField

                    id="img"
                    label="Img"
                    name="img"
                    value={mFormData.img}
                    placeholder="Image path/url"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextField

                    id="category"
                    label="Category"
                    name="category"
                    value={mFormData.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <TextField

                    id="price"
                    label="Price"
                    name="price"
                    value={mFormData.price}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>
                <div>
                  <TextField

                    id="discount"
                    label="Discount"
                    name="discount"
                    value={mFormData.discount}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>
                <div>
                  <TextField

                    id="currentQuantity"
                    label="CurrentQuantity"
                    name="currentQuantity"
                    value={mFormData.currentQuantity}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>
                <div>
                  <TextField

                    id="thresholdQuantity"
                    label="ThresholdQuantity"
                    name="thresholdQuantity"
                    value={mFormData.thresholdQuantity}
                    onChange={handleInputChange}
                    type="number"
                  />
                </div>

                <br />
                <TopButton variant="contained" color="primary" type="filled">
                  {mFormData._id ? 'Update' : 'Submit'}
                </TopButton>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default AdminProducts;
