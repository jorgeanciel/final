import React from 'react'

import { Carrito } from "./components/Carrito";
import { Carrito2 } from "./components/Carrito2";
import {DataProvider} from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
import Pages from "./components/Page.js";

import Banner from './components/Banner';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/system';
import { Feed } from './components/Feed';
import { Container, Stack } from '@mui/material';
import { Footer } from './components/Footer';
import Navbar2 from './components/Navbar2';
import DarkVariantExample from './components/Carousel';


function App() {

  return (
    <DataProvider>
        <Router>
          <Box>
            <Carrito2 />
            <Navbar />
            <Navbar2 />
            
            <DarkVariantExample/>
            <Pages />
            <Container>
              <Feed/>
            </Container>
            <Footer/>
            
            
          </Box>
        </Router>
    </DataProvider>
  );
}

export default App;
