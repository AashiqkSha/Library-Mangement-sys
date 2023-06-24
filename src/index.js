import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Cart1 from './pages/Cart/Cart';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Login from "./components/Login/login";
import Logout from "./components/Login/logout";
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
root.render(
 <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
  <AppProvider>

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
          <Route path="cart" element = {<Cart1/>} />
          <Route path= "login" element={<Login />} />
          <Route path="logout" element={<Logout />} / >
        </Route>
      </Routes>
    </BrowserRouter> 
  </AppProvider>
</Auth0Provider>
);

