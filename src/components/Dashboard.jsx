import React from "react";
import MenuHeader from "./MenuHeader";
import SheetSection from "./SheetSection";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <MenuHeader /> <SheetSection />
    </div>
  );
};

export default Dashboard;
