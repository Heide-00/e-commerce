import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage"; 

function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <TopBar />
          <Header />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/contact" component={ContactPage} /> 
          </Switch>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;









