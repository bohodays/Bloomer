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
        // add custom tooltip for the emotion property
        tooltip={(bar) => (
          <div>
            <strong>{bar.data.emotion}</strong>
            <br />
            Count: {bar.data.count}
          </div>
        )}
        // render emotion property as an image
        layers={[
          "bars",
          "markers",
          "legends",
          CustomEmotionLayer
        ]}
      />
    </BarBody>
    
  );
}

const CustomEmotionLayer = (props:any) => {
  const { bars, xScale, yScale } = props;

  return (
    <g>
      {bars.map((bar:any) => {
        if (bar.data && bar.data.emotion) {
          return (
            <image
              key={bar.id}
              x={xScale(bar.data.emotion) + xScale.bandwidth() / 2 - 8}
              y={yScale(bar.data.count) - 30}
              width={16}
              height={16}
              xlinkHref={require(`../../../../assets/imgs/flower_bgicon/bgicon_f${bar.data.emotion}.png`).default}
            />
          );
        } else {
          return null;
        }
      })}
    </g>
  );
};

const BarBody = styled.div`
  // display: flex;
  align-items: center;
  cursor: pointer;

  height: 20vh;
  margin-bottom : 5vh;
`;
export default Bar;
