import { Routes, Route } from "react-router-dom";
import Home from "./routes/home.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Navigation from "../src/routes/navigation/navigation.component";
import Checkout from "../src/routes/checkout/checkout.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
