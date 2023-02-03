import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode >
    <Provider  store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
codeToExecuteOnAllPages();


function codeToExecuteOnAllPages(){

console.log("This code is being executed on all pages");

//enter code to add products from database-cart to cart on website

var products = getFromDatabase("Cart_Details");

//function is already made, you just have to import it into index.js
addToCart(products);



}

function getFromDatabase(databaseItemName){

  //Code to get Products from database



  return dataBaseData;
}
*/