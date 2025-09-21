import { BrowserRouter, Switch, Route } from "react-router-dom";
import TopBar from "./layout/TopBar";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";

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
          </Switch>
        </div>
    </BrowserRouter>
  );
}
export default App;
