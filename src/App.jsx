import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDeatailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error/Error.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutUs from './components/Us/AboutUs.jsx';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />

                    <Route path="/category/:categoryId" element={<ItemListContainer />} />

                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="*" element={<Error />} />

                    <Route path="AboutUs" element={<AboutUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;
