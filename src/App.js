import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbMessage2 } from "react-icons/tb";
import Del from "./Del";
import Price from "./Price";
import Footer from "./Footer";
import First from "./First";

function App() {
  const [selectedPage, setSelectedPage] = useState("Page-1");

  const renderPage = () => {
    switch (selectedPage) {
      case "Page-1":
        return <First />;
      case "Page-2":
        return <Del />;
      case "Page-3":
        return <Price />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full min-w-fit ">
      <div className="flex-1 grid place-content-center">
        <div className="flex justify-center mt-2 items-center gap-16">
          <button
            onClick={() => setSelectedPage("Page-1")}
            className={`focus:outline-none ${selectedPage === "Page-1" ? " " : ""}`}
          >
            <span className="bg- text-black rounded-3xl text-xl p-2 pl-2">Page-1</span>
          </button>
          <button
            onClick={() => setSelectedPage("Page-2")}
            className={`focus:outline-none ${selectedPage === "Page-2" ? " " : ""}`}
          >
            <span className="bg- text-black rounded-3xl text-xl p-2 pl-2">Page-2</span>
          </button>
          <button
            onClick={() => setSelectedPage("Page-3")}
            className={`focus:outline-none ${selectedPage === "Page-3" ? "" : ""}`}
          >
            <span className="bg- text-black rounded-3xl text-xl p-2 pl-2">Page-3</span>
          </button>
        </div>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
