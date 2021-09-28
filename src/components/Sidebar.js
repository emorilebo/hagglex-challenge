import React from "react";
import {
  ViewGridIcon,
  CreditCardIcon,
  GiftIcon,
  PresentationChartLineIcon,
  CubeIcon,
  QuestionMarkCircleIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="lg:flex-row h-full justify-between my-5 px-5 border-r sticky">
      <div className="">
        <div className="flex mx-auto md:inline-block">
          <SidebarRow Icon={ViewGridIcon} title="DASHBOARD" />

          <SidebarRow Icon={CreditCardIcon} title="WALLET" />
 
          <SidebarRow Icon={CreditCardIcon} title="OTC" />
          <SidebarRow Icon={CubeIcon} title="SAVINGS" />
          <SidebarRow Icon={GiftIcon} title="MORE" />
          <SidebarRow Icon={ChatAlt2Icon} title="SUPPORT" />
        </div>
        
      </div>
    </div>
  );
}

export default Sidebar;