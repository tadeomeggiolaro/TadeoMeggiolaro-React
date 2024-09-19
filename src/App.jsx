import './App.css';
import { useEffect,useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDeatailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/Us/AboutUs.jsx';
import CartProvider from './context/CartContext/CartProvider.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';


const App = () => {


    
    return (
        <>

        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />

                    <Route path="/category/:categoryId" element={<ItemListContainer />} />

                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="*" element={<Error />} />

                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="AboutUs" element={<AboutUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
        </>
    );
};

export default App;
