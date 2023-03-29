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
        padding={0.6}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={(bar) => `url(${bar.data.color})`}
        borderRadius={11}
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
          "legends",
          (props) => (
            <g>
              {props.bars.map((bar:any) => (
                
                <rect
                  key={bar.key}
                  x={bar.x-100} // transform 값 변경
                  y={bar.y}
                  fill={`url(${bar.data.color})`}
                />
              ))}
            </g>
          )
        ]}
      />
    </BarBody>
  );
}

const BarBody = styled.div`
  // display: flex;
  align-items: center;
  cursor: pointer;

  height: 200px;

  .nivo-ba rect {
    fill: red;
  }
`;
export default Bar;
