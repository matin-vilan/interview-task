import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { AppProvider } from "./store/AppProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <App />
  </AppProvider>
);
