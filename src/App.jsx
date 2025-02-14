import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./componets/Header/Header";
import Footer from "./componets/Header/footer/Footer";
import Production from "./pages/production/Production";
import Contacts from "./pages/contacts/Contacts";
import Shop from "./pages/shop/Shop";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="routes">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/production" exact element={<Production />} />
            <Route path="/contacts" element={<Contacts />} />
<<<<<<< HEAD
            <Route path="/shop" element={<Shop/>} />
=======
            <Route path="/shop" element={<Shop />} />
>>>>>>> 7e18e16a9e336b24a3ef07ecbbdc0fb08cefb8b7
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
