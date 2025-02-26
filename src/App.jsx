import "./App.css";
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="relative">
      <div className="bg-slate-900 fixed top-0 left-0 right-0 z-10 ">
          <Navbar/>
        </div>
        <Toaster position="top-center"/>
      <Outlet/>
    </div>
  );
}

export default App;
