import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

import React,{useState} from 'react';
import Product from './Components/Product';
import AddItem from './Components/AddItem';


function App() {
  let productList=[
    {
      price: 99999,
      name: "Iphone 15",
      quantity: 0
    },
    {
      price: 9999,
      name: "Redmi 7",
      quantity: 0
    }
  ]
  let setProductList;
   [productList, setProductList] =  useState(productList);
   let [totalAmount, setTotalAmount]= useState(0)

  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  let decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  let resetData=()=>{
    let newProductList = [...productList];
    newProductList.map((product)=>{
      product.quantity=0
    })
    setTotalAmount(0);
    setProductList(newProductList);
  }

  let removeItem=(index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  let addItem=(name,price)=>{
    let newProductList = [...productList];
    newProductList.push({
      name:name,
      price:price,
      quantity:0
    })
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar productList={productList}/>
    <main className='container mt-5'>
    <AddItem addItem={addItem}/>
    <ProductList
    productList={productList} 
    incrementQuantity={incrementQuantity} 
    decrementQuantity={decrementQuantity}
    removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetData={resetData}/>
    </>
  );
}

export default App;
