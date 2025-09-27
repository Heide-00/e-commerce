import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import SignupPage from "./pages/SignupPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

import axiosInstance, { setAuthToken, clearAuthToken } from "./api/axiosInstance";
import { setUser } from "./store/actions/clientActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    // Token'ı axios header'a ekle
    setAuthToken(token);

    // Token doğrulama isteği
    axiosInstance.get("/verify")
      .then((res) => {
        // Redux'a kullanıcıyı yaz
        dispatch(setUser(res.data.user));

        // Token'ı yenile
        localStorage.setItem("token", "mock-token-123");
        setAuthToken("mock-token-123");
      })
      .catch(() => {
        // Token geçersizse temizle
        localStorage.removeItem("token");
        clearAuthToken();
        dispatch({ type: "CLEAR_USER" });
      });
  }, [dispatch]);

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
            <Route path="/team" component={TeamPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>

          <Footer />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;



















