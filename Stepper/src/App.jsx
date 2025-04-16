import CheckoutStepper from "./components/Stepper";
import "./App.css";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Provide your contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Enter your Shipping details</div>,
  },
  {
    name: "Payment",
    Component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Complete payment for your order </div>,
  },
  {
    name: "Delivered",
    Component: () => <div className="text-xl sm:text-2xl font-semibold sm:font-bold text-neutral-100">Your order has been delivered</div>,
  },
];

function App() {
  return (
    <>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
