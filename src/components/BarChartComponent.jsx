import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ReferenceLine, Cell,
} from 'recharts';
import styled from 'styled-components';

const ParagraphStyles = styled.p`
  color: #050505;
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const TooltipStyles = styled.div`
  background-color: rgba(245, 245, 245, 0.5);
  padding: 10px 5px;
`;

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <TooltipStyles>
        <ParagraphStyles>{`${label}`}</ParagraphStyles>
        <ParagraphStyles>{`${payload[0].name}: ${payload[0].value}`}</ParagraphStyles>
      </TooltipStyles>
    );
  }

  return null;
};

const CustomizedTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666"  style={{fontSize: 13}}>{payload.value}</text>
    </g>
  );
}

function BarChartComponent(props) {
  const {
     width, height, layout, data,
  } = props;
  return (
    <BarChart
      width={width}
      height={height}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
      layout={layout}
    >
      <XAxis dataKey={(layout === 'horizontal' && 'name') || ''} tick={CustomizedTick} type={(layout === 'horizontal' && 'category') || 'number'} />
      <YAxis dataKey={(layout === 'vertical' && 'name') || ''} tick={CustomizedTick} type={(layout === 'vertical' && 'category') || 'number'} />
      <Tooltip content={CustomTooltip} />
      <Legend />
      <ReferenceLine x={0} stroke="#000" />
      <Bar dataKey="points">
        {data.map((entry, index) => {
          let color = '#82f58c';
          if (entry.points < 6 && entry.points > 0) {
            color = '#f7b35b';
          } else if (entry.points < 0) {
            color = '#f83707';
          }
          return <Cell key={`cell_${index}`} fill={color}/>
        })}
      </Bar>
    </BarChart>
  );
}

BarChartComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

BarChartComponent.defaultProps = {
  width: 500,
  height: 300,
  layout: 'horizontal',
}

export default BarChartComponent;