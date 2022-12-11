import { Dispatch, SetStateAction } from "react";

// styles
import "./tab.style.css";

interface TabProps {
  tabName: "write" | "preview";
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<"write" | "preview">>;
  children: React.ReactNode;
}

const Tab = ({ tabName, selectedTab, setSelectedTab, children }: TabProps) => {
  return (
    <button
      onClick={() => setSelectedTab(tabName)}
      className={selectedTab === tabName ? "tab active" : "tab"}
    >
      {children}
    </button>
  );
};

export default Tab;
