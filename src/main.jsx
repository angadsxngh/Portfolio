import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import { Toaster } from "@/components/ui/toaster";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
        <main className="dark text-foreground bg-background">
          <App />
        </main>
    </HeroUIProvider>
  </StrictMode>
);
