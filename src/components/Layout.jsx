import React from "react";

import { Routes, Route,  } from "react-router-dom";
// import {Route} from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";

import ProductView from './ProductViewModal'

import routes from "../routes/Routess";
import ProductViewModal from "./ProductViewModal";

const Layout = () => {
  return (
    
      <div className="container">
        <Header />
        <div className="main">
          <Routes>
            {routes.map((route, idx) => (
              <Route key={idx} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
        <Footer/>
        <ProductViewModal/>
      </div>
    

    // <BrowserRouter>
    //   <Route
    //     render={(props) => (
    //       <div>
    //         <Header {...props} />
    //         <div className="container">
    //           <div className="main">
    //             <Routes />
    //           </div>
    //         </div>
    //         <Footer />
    //       </div>
    //     )}
    //   />
    // </BrowserRouter>
  );
};

export default Layout;
