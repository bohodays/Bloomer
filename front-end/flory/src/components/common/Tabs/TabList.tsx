import { STabList } from "./styles";
import TabItem from "./TabItem";
import Grid from "@mui/material/Grid";

const TabList: React.FC<{ tabs: any; handleChange: any; value: any }> = (
  props
) => {
  return (
    <STabList>
      <Grid container spacing={1}>
        {props.tabs.map((tab: any, idx: number) => (
          <TabItem
            label={tab.label}
            onClick={props.handleChange}
            idx={idx}
            value={props.value}
          ></TabItem>
        ))}
      </Grid>
    </STabList>
  );
};

export default TabList;
