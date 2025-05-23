import CheckoutStepper from "./components/Stepper/Stepper";
import "./App.css";
import SpeedDialPosi from "./components/SpeedDialPosi/SpeedDialPosi";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import { RevealCardGrid } from "./components/RevealCardGrid/RevealCardGrid";


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
      {/* CheckoutStepper Component */}
      {/* <CheckoutStepper stepsConfig={CHECKOUT_STEPS} /> */}

      {/* Speed Dail Component */}
      {/* <SpeedDialPosi /> */}

      {/* Drop Down Menu Component */}
      {/* <DropDownMenu menuItems={["Home", "AboutUs", "Logout"]} /> */}

      <RevealCardGrid />
    </>
  );
}

export default App;
