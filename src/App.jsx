import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
//import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";



function App() {
  return (
    <BrowserRouter>
      <div className="w-full">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <TopBar />
          <Header />
        </div>
          <Switch>
          <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
         {/*} <Footer/>*/}
        </div>
    </BrowserRouter>
  );
}
export default App;









