import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabList from "./TabList";
import { TabType } from "../../../models/common/tabType";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

const BasicTabs: React.FC<{ tabs: TabType[] }> = (props) => {
  const [value, setValue] = React.useState(0);

  const switchTab = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ width: "90%" }}>
      <div>
        <TabList tabs={props.tabs} handleChange={switchTab} value={value}/>
      </div>
      {props.tabs.map((tab, idx) => (
        <TabPanel key={idx} value={value} index={idx}>
          {tab.panel}
        </TabPanel>
      ))}
    </div>
  );
};

export default BasicTabs;
