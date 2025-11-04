import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=BAAWWCo5o3VVrbaYeS_rJ0J5xdA0GcqOjudUYWDoXEvugFi3dOF-jgR8K2EAQmeEb8ceL6HdMUKkdds3OM&components=hosted-buttons&disable-funding=venmo&currency=EUR';
    script.async = true;
    script.onload = () => {
      // Wait a bit for PayPal SDK to fully initialize
      setTimeout(() => {
        if (window.paypal && window.paypal.HostedButtons) {
          const financiasContainer = document.getElementById('paypal-container-RLXCEUUQ6AJXJ');
          const crmContainer = document.getElementById('paypal-container-JLD6ER6RWLBBQ');
          
          if (financiasContainer) {
            try {
              window.paypal.HostedButtons({
                hostedButtonId: "RLXCEUUQ6AJXJ",
              }).render("#paypal-container-RLXCEUUQ6AJXJ");
            } catch (err) {
              console.error('Error rendering PayPal button for Finanzas:', err);
            }
          }
          
          if (crmContainer) {
            try {
              window.paypal.HostedButtons({
                hostedButtonId: "JLD6ER6RWLBBQ",
              }).render("#paypal-container-JLD6ER6RWLBBQ");
            } catch (err) {
              console.error('Error rendering PayPal button for CRM:', err);
            }
          }
        }
      }, 500);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;