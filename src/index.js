import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
//import App from './App';
import Banners from './components/Banner';
import reportWebVitals from './reportWebVitals';
import Carts from './components/Cart';
import ShoppingLists from './components/ShoppingList'

//Entry point on DOM element root
const root = ReactDOM.createRoot(document.getElementById('root'));

//Component Assembly Functions
function Banner() {
  return (
    <div id="banner" >
      <Banners />
    </div>
  )
}
function Cart() {
  return(
    <div id="cart">
      <Carts />
    </div>
  )
}
function ShoppingList() {
  return (
    <div id ="shoppingList">
      <ShoppingLists />
    </div>
  )
}

//Rendering to the DOM
root.render(
  <>
  {/* <React.StrictMode> */}
    <Banner />
    <Cart />
    <ShoppingList />
  {/* </React.StrictMode> */}
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
