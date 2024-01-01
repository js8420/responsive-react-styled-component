import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/pricing" exact element={<PricingPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
