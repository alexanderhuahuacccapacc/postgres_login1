import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SolicitarCompra } from "./screens/SolicitarCompra";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SolicitarCompra />
  </StrictMode>,
);
