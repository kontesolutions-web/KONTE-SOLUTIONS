import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    // Only load PayPal SDK once
    if (window.paypalScriptLoaded) {
      return;
    }
    window.paypalScriptLoaded = true;

    // Load PayPal SDK
    const script = document.createElement('script');
    script.id = 'paypal-sdk';
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAWWCo5o3VVrbaYeS_rJ0J5xdA0GcqOjudUYWDoXEvugFi3dOF-jgR8K2EAQmeEb8ceL6HdMUKkdds3OM&components=hosted-buttons&disable-funding=venmo&currency=EUR';
    script.async = true;
    script.onload = () => {
      // Wait for PayPal SDK to fully initialize
      setTimeout(() => {
        if (window.paypal && window.paypal.HostedButtons) {
          const financiasContainer = document.getElementById('paypal-container-RLXCEUUQ6AJXJ');
          const crmContainer = document.getElementById('paypal-container-JLD6ER6RWLBBQ');
          
          if (financiasContainer && !financiasContainer.hasChildNodes()) {
            try {
              window.paypal.HostedButtons({
                hostedButtonId: "RLXCEUUQ6AJXJ",
              }).render("#paypal-container-RLXCEUUQ6AJXJ");
            } catch (err) {
              console.log('PayPal button already rendered for Finanzas');
            }
          }
          
          if (crmContainer && !crmContainer.hasChildNodes()) {
            try {
              window.paypal.HostedButtons({
                hostedButtonId: "JLD6ER6RWLBBQ",
              }).render("#paypal-container-JLD6ER6RWLBBQ");
            } catch (err) {
              console.log('PayPal button already rendered for CRM');
            }
          }
        }
      }, 1000);
    };
    
    // Only append if not already present
    if (!document.getElementById('paypal-sdk')) {
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/KONTE-SOLUTIONS">
        {/* NOTA: He movido el componente Home fuera de Routes para simplificar,
           ya que solo tienes una ruta. Si añades más rutas en el futuro,
           puedes volver a ponerlo dentro. */}
        <Home />
      </BrowserRouter>
    </div>
  );
}

export default App;