import { useEffect } from "react";
import { WebApp } from "@grammyjs/web-app";
import "./App.css";

function App() {
  const { VITE_CLOUDFARE_SITE_KEY } = import.meta.env || {};

  const onClose = (e: React.MouseEvent) => {
    e.preventDefault();

    WebApp.close();
  };

  useEffect(() => {
    console.log("cloudfare site key: ", VITE_CLOUDFARE_SITE_KEY);

    // @ts-ignore
    window.onloadTurnstileCallback = () => {
      // @ts-ignore
      turnstile.render("#turnstile", {
        sitekey: VITE_CLOUDFARE_SITE_KEY,
        theme: "dark",
        callback: (token: string) => {
          console.log(`Challenge Success ${token}`);
        },
      });
    };
  }, [window]);

  useEffect(() => {
    WebApp.ready();
  }, []);

  return (
    <div className="App">
      <div id="turnstile"></div>
      <div>
        <button className="Button" onClick={onClose}>
          Close app
        </button>
      </div>
    </div>
  );
}

export default App;
