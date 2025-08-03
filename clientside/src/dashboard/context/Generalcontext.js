import React, { useState } from "react";
import BuyActionWindow from "../buyactionwindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    console.log("🛑 closeBuyWindow called");
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}

      {/* 👇 Move into a floating layer so it's not embedded in layout */}
      {isBuyWindowOpen && (
        <div style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          zIndex: 1000,
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          borderRadius: "8px"
        }}>
          <BuyActionWindow uid={selectedStockUID} />
        </div>
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
