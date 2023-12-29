import WorksSideBar from "@components/Work/Layout/Works";
import { GlobalContextProvider } from "@contexts/WorkContext";

import React from "react";
function layout({ children }) {
  return (
    <div className="w-full">
      <GlobalContextProvider>
        <div className="hidden md:block">
          <WorksSideBar />
        </div>

        <div className="ml-0 grid place-items-center  md:ml-[20rem]">
          {children}
        </div>
      </GlobalContextProvider>
    </div>
  );
}

export default layout;
