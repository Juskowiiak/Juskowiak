import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./Style/globalStyle";
import Rotas from "./rotas/rotas";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </StrictMode>
);
