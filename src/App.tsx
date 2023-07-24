import { useEffect } from "react";
import "./App.css";

function App() {
  const { VITE_CLOUDFARE_SITE_KEY } = import.meta.env || {};

  useEffect(() => {
    console.log("cloudfare site key: ", VITE_CLOUDFARE_SITE_KEY);

    // @ts-ignore
    window.onloadTurnstileCallback = () => {
      // @ts-ignore
      turnstile.render("#turnstile", {
        sitekey: VITE_CLOUDFARE_SITE_KEY,
        callback: (token: string) => {
          console.log(`Challenge Success ${token}`);
        },
      });
    };
  }, [window]);

  return (
    <div className="App">
      <div id="turnstile"></div>
    </div>
  );
}

export default App;
