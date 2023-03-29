import React from "react";
import styled from "styled-components";
import { ResponsiveBar } from '@nivo/bar';

interface DataItem {
  [key: string]: any;
}

type Props = {
  data?: DataItem[];
};

function Bar(props: Props) {

  const data = props.data || [];
  return (
    <BarBody>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="emotion"
        margin={{ top: 50, right: 50, bottom: 40, left: 100 }}
        padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        borderRadius={5}
        enableGridY={false}
        legends={[]}
        tooltip={(bar) => (
          <div>
            <strong>{bar.data.emotion}</strong>
            <br />
            Count: {bar.data.count}
          </div>
        )}
        layers={[
          "bars",
          "markers",
          "legends"
        ]}
      />
    </BarBody>
    
  );
}


const BarBody = styled.div`
  // display: flex;
  align-items: center;
  cursor: pointer;

  height: 20vh;
  margin-bottom : 5vh;
`;
export default Bar;
