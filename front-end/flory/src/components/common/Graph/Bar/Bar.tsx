import React, { useState } from "react";
import styled from "styled-components";
import { ResponsiveBar } from "@nivo/bar";

interface DataItem {
  [key: string]: any;
}

type Props = {
  data?: DataItem[];
};

function Bar(props: Props) {
  const data = props.data || [];
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);

  const handleBarMouseOver = (index: number) => {
    setHoveredBarIndex(index);
  };

  const handleBarMouseLeave = () => {
    setHoveredBarIndex(null);
  };

  return (
    <BarBody>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="emotion"
        // padding={0.3}
        groupMode="grouped"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        borderRadius={15}
        enableGridY={false}
        legends={[]}
        layers={[
          // "bars",
          "legends",
          (props) => {
            const { bars } = props;
            return (
              <g>
                <defs>
                  <linearGradient id="gradient">
                    {data[0].color.colors.map((stop: any, i: number) => (
                      <stop key={i} offset={stop.offset} stopColor={stop.color} />
                    ))}
                  </linearGradient>
                </defs>
                {bars.map((bar: any, index: number) => (
                  <React.Fragment key={bar.key}>
                    <rect
                      x={bar.x + 14} // transform 값 변경
                      y={bar.y}
                      rx={10}
                      ry={15}
                      fill={hoveredBarIndex === index ? "#FFE897" : "url(#gradient)"}
                      width={bar.width - 35}
                      height={bar.height}
                      onMouseOver={() => handleBarMouseOver(index)}
                      onMouseLeave={handleBarMouseLeave}
                    />
                    {hoveredBarIndex === index && (
                      <text
                        x={bar.x + bar.width / 2 -5}
                        y={bar.y + bar.height / 2}
                        dy=".35em"
                        textAnchor="middle"
                        style={{ fontSize: "14px", fill: "black" }}
                      >
                        <tspan x={bar.x + bar.width / 2 - 5} dy="-1.2em">
                          {bar.data.data.emotion}
                        </tspan>
                        <tspan x={bar.x + bar.width / 2 - 5} dy="1.2em">
                          {bar.data.data.count}
                        </tspan>

                      </text>
                    )}
                  </React.Fragment>
                ))}
              </g>
            );
          },
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

`;

export default Bar;
