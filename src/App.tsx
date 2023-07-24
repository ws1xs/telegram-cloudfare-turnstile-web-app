import { useEffect } from "react";
import "./App.css";

function App() {
  const { VITE_CLOUDFARE_SITE_KEY } = import.meta.env || {};

  useEffect(() => {
    // @ts-ignore
    window.onloadTurnstileCallback = () => {
      // @ts-ignore
      turnstile.render("#app", {
        sitekey: VITE_CLOUDFARE_SITE_KEY,
        callback: (token: string) => {
          console.log(`Challenge Success ${token}`);
        },
      });
    };
  }, [window]);

  return <div id="app" className="App"></div>;
}

export default App;
