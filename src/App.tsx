import "./App.css";
import { DIP } from "./principles/DIP";
import { LSP } from "./principles/LSP";
import { OCP } from "./principles/OCP";
import { SRP } from "./principles/SRP";

//Advanced 
import { SRP_ADVANCED } from "./advanced/SRP";

function App() {
  return (
    // <div className="flex min-w-full h-full justify-center items-center p-8">
    //   {/* <SRP /> */}
    //   {/* <OCP /> */}
    //   {/* <LSP /> */}
    //   {/* <DIP /> */}
    // </div>
    <div className="flex min-w-full h-full justify-center items-center p-8">
      <SRP_ADVANCED />
      {/* <SRP /> */}
      {/* <OCP /> */}
      {/* <LSP /> */}
      {/* <DIP /> */}
    </div>
  );
}

export default App;
