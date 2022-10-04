import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.esm.js";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import CartEnter from "./component/Enter/CartEnter";
import CartForget from "./component/forget/CartForget";
import CartReg from "./component/register/CartReg";
import React, { useState, useContext } from "react";
import List from "./component/List/List";
import Home from "./component/home/Home";
import CartPage from "./component/cartlist/CartPage";
import { CartProvider } from "./shared/cart-context";
import { Header2 } from "./component/header2/header/Header2";

import {
  CityProvider,
  ZirdasteProvider,
  MajmoeeProvider,
  DastebandiProvider,
  ProductIdProvider,
  GenderIdProvider,
  TagIdProvider,
  ContentProvider,
} from "./shared/city-context";
import { CountProvider } from "./shared/count-context";
import { DarkProvider,DarkContext } from "./shared/darkmode";
import Pardakht from "./component/pardakht/Pardakht";

function App() {
  const [dark, setDark] = useContext(DarkContext);
  const darkmode = dark
    ? {
        background: "#27272A",
        color: "#ffffff",
      }
    : {};

  return ( 
    <div className="App" style={darkmode}>
        <CountProvider>
          <ContentProvider>
            <TagIdProvider>
              <GenderIdProvider>
                <ProductIdProvider>
                  <MajmoeeProvider>
                    <ZirdasteProvider>
                      <CartProvider>
                        <DastebandiProvider>
                          <CityProvider>
                            <BrowserRouter>
                              <Switch>
                                <Route exact path="/">
                                  <Home />
                                </Route>

                                <Route exact path="/login">
                                  <CartEnter />
                                </Route>

                                <Route exact path="/login/forget">
                                  <CartForget />
                                </Route>

                                <Route exact path="/login/signup">
                                  <CartReg />
                                </Route>

                                <Route exact path="/list">
                                  <List />
                                </Route>
                                <Route exact path="/cartlist">
                                  <Header2 />
                                  <CartPage/>
                                </Route>
                                <Route exact path="/pardakht">
                                  <Pardakht />
                                </Route>
                              </Switch>
                            </BrowserRouter>
                          </CityProvider>
                        </DastebandiProvider>
                      </CartProvider>
                    </ZirdasteProvider>
                  </MajmoeeProvider>
                </ProductIdProvider>
              </GenderIdProvider>
            </TagIdProvider>
          </ContentProvider>
        </CountProvider>
    </div>
  );
}

export default App;
