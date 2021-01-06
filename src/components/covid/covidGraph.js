import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import Slider from '../slider/slider';
import * as d3 from 'd3';
import { useD3 } from 'd3blackbox';
import { KeyWrapper, KeyDot, Chart, drawLine } from './styles';
import { data } from '../../data/covid-data';

const Axis = ({ x, y, scale, axisType, ticks, tickFormat }) => {
  const fnName = axisType === 'left' ? 'axisLeft' : 'axisBottom';
  const ref = useD3((el) => {
    d3.select(el)
      .call(
        d3[fnName](scale).ticks(ticks).tickFormat(tickFormat).tickSizeInner(12),
      )
      .style('font-size', '12px');
  });
  return <g transform={`translate(${x}, ${y})`} ref={ref} />;
};

const Path = ({ d, className, strokeColor }) => {
  return (
    <path
      className={className}
      d={d}
      style={{
        fill: 'none',
        strokeWidth: 5,
        stroke: strokeColor,
        strokeLinecap: 'round',
      }}
    />
  );
};

const LineChart = () => {
  const margin = { top: 40, right: 40, bottom: 40, left: 40 };
  const width = 600 - margin.right - margin.left;
  const height = 400 - margin.top - margin.bottom;
  const parseTime = d3.timeParse('%Y-%m-%d');
  const graphRed = '#ff6b6b';
  const graphBlue = '#00b4d8';

  const [sliderValue, setSliderValue] = useState(12);

  const handleChange = (newVal) => {
    setSliderValue(newVal);
  };

  const dataRange = [];
  data.forEach((d) => {
    if (d.id <= sliderValue) {
      d.date = parseTime(d.Date);
      d.VTCases = +d.VTCases;
      d.NHCases = +d.NHCases;
      dataRange.push({ VTCases: d.VTCases, NHCases: d.NHCases, Date: d.date });
    }
  });

  const xScale = d3
    .scaleTime()
    .domain([
      d3.min(dataRange, (d) => d.Date),
      d3.max(dataRange, (d) => d.Date),
    ])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([
      d3.min(dataRange, (d) => d.VTCases),
      d3.max(dataRange, (d) => d.NHCases),
    ])
    .range([height, 0]);

  const vermont = d3
    .line()
    .x((d) => xScale(d.Date))
    .y((d) => yScale(d.VTCases));

  const newHampshire = d3
    .line()
    .x((d) => xScale(d.Date))
    .y((d) => yScale(d.NHCases));

  const formatYAxis = (d) => {
    if (d >= 1000) {
      d = d / 1000 + 'k';
    }
    return d;
  };

  const ChartKey = () => {
    return (
      <>
        <KeyWrapper>
          <KeyDot style={{ backgroundColor: graphRed }} />
          <div style={{ paddingRight: '16px', paddingBottom: '8px' }}>VT</div>
          <KeyDot style={{ backgroundColor: graphBlue }} />
          <div style={{ paddingBottom: '8px' }}>NH</div>
        </KeyWrapper>
      </>
    );
  };

  return (
    <>
      <ChartKey />
      <Chart>
        <svg
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left + 3}, ${margin.right})`}>
            <Path
              strokeColor={graphRed}
              d={vermont(dataRange)}
              css={css`
                animation: ${drawLine} 5s;
                stroke-dasharray: 1000;
              `}
            />
            <Path
              strokeColor={graphBlue}
              d={newHampshire(dataRange)}
              css={css`
                animation: ${drawLine} 5s;
                stroke-dasharray: 1000;
              `}
            />
          </g>
          <Axis
            x={margin.left}
            y={margin.top}
            scale={yScale}
            axisType="left"
            ticks={4}
            tickFormat={formatYAxis}
          />
          <Axis
            x={margin.left}
            y={height + margin.top}
            scale={xScale}
            axisType="bottom"
            ticks={sliderValue}
            tickFormat={d3.timeFormat('%b')}
          />
        </svg>
      </Chart>
      <div style={{ width: `${width}px`, marginTop: '16px' }}>
        <Slider
          min={3}
          max={12}
          value={sliderValue}
          onSliderChange={handleChange}
        />
      </div>
    </>
  );
};

Axis.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  axisType: PropTypes.string,
  scale: PropTypes.func,
  ticks: PropTypes.number,
  tickFormat: PropTypes.func,
};

Path.propTypes = {
  strokeColor: PropTypes.string,
  d: PropTypes.string,
  className: PropTypes.string,
};

export default LineChart;
