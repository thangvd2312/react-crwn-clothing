import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import { UserProvider } from "./contexts/user.context.jsx";
import { CategoriesProvider } from "./contexts/categories.context.jsx";
import { CartProvider } from "./contexts/cart.context.jsx";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
);
