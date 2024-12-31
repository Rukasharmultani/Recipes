import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux_thunk/CookStore';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import { AboutUs } from './Pages/About';
import Contact from './Pages/Contact';
import RecipeDetails from './Pages/DetailsPages';
import SearchRecipes from './Pages/SearchRecipes';
import Header from './Common/Header';
import Footer from './Common/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* Add Header and Footer */}
        <Header />
        <div style={{ minHeight: 'calc(100vh - 150px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/SearchRecipes" element={<SearchRecipes />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
