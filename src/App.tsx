import { useEffect } from "react";
import { WebApp } from "@grammyjs/web-app";
import "./App.css";

function App() {
  const { VITE_CLOUDFARE_SITE_KEY } = import.meta.env || {};

  const onCaptchaSuccess = () => {
    console.log("Turnstile: Success.");

    closeApp();
  };

  const onCaptchaError = () => {
    console.log("Turnstile: Error.");

    closeApp();
  };

  const closeApp = () => {
    if (!WebApp) return;

    WebApp.close();
  };

  useEffect(() => {
    if (!window) return;

    window.onloadTurnstileCallback = () => {
      // @ts-ignore
      turnstile.render("#turnstile", {
        sitekey: VITE_CLOUDFARE_SITE_KEY,
        theme: "dark",
        size: "normal",
        callback: onCaptchaSuccess,
        "error-callback": onCaptchaError,
      });
    };
  }, [window]);

  useEffect(() => {
    WebApp?.ready();
  }, []);

  return (
    <div className="App">
      <div id="turnstile"></div>
    </div>
  );
}

export default App;
