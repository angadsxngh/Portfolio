import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "@/components/ui/toaster";
import { Provider } from "./components/ui/provider"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <Provider>
        <main className="dark text-foreground bg-background">
            <App />
          </main>
        </Provider>
    </HeroUIProvider>
  </StrictMode>
);
