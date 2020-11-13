import React from 'react';
import PropTypes from 'prop-types';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

function RadarChartComponent(props) {
  const {
    width, height, data,
  } = props;
  
  return (
    <RadarChart cx={150} cy={120} outerRadius={75} width={width} height={height} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="attribute" />
      <PolarRadiusAxis />
      <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

RadarChartComponent.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  layout: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

RadarChartComponent.defaultProps = {
  width: 300,
  height: 300,
}

export default RadarChartComponent;