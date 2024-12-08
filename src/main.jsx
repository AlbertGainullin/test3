import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { spy } from "mobx";
import { RootStoreContext } from "hooks/useStore";
import { RootStore } from "store";
import App from "./App.jsx";

spy((e) => {
  if (e.type === "action") {
    console.log(e);
  }
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootStoreContext.Provider value={new RootStore()}>
        <App />
      </RootStoreContext.Provider>
    </BrowserRouter>
  </StrictMode>
);
