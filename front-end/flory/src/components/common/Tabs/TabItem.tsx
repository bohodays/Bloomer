import { STabItem } from "./styles";
import Grid from "@mui/material/Grid";

const TabItem: React.FC<{
  label: any;
  onClick: any;
  idx: number;
  value: number;
}> = (props) => {
  const isValue = props.value === props.idx;

  const onClick = () => {
    props.onClick(props.idx);
  };
  return (
    <Grid item xs={4}>
      <STabItem isValue={isValue} onClick={onClick}>
        {props.label}
      </STabItem>
    </Grid>
  );
};

export default TabItem;
