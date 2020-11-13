import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import Tooltip from './Tooltip';
import BarChartComponent from './BarChartComponent';
import { formatPointsForChart } from '../utils/utils';

const FieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 20px;
`;

const ChartWrapper = styled.div`
  
`;

const Field = styled.div`
  width: ${props => Boolean(props.width) ? props.width : '175px'};
  text-align: left;
  display: flex;
  align-items: flex-end;
`;

const Header = styled.span`
  text-transform: capitalize;
  font-weight: bold;
  margin-right: 7px;
`;

const SmallImg = styled.img`
  width: 30px;
  height: 30px;
  position: relative;
  top: 7px;
  margin-left: 5px;
`;

function CardOnHover(props) {
  const { data, children } = props;

  const getFields = () => (
    <FieldWrapper>
      {Object.keys(data)
      .filter((key) => data[key].type === 'PI' || data[key].type === 'careerInfo')
      .map((key) => (
        <Field width={data[key].width}>
          <Header>{key}:</Header>
          {data[key].value}
          {Boolean(data[key].img_url) && <SmallImg src={data[key].img_url} />}
        </Field>
      ))}
    </FieldWrapper>
  );

  const getCharts = () => Object.keys(data)
  .filter((key) => data[key].type === 'chartInfo')
  .map((key) => (
    <div>
      {data[key].value.chartType === 'bars' && (
        <BarChartComponent 
          data={formatPointsForChart(data)}
          width={300}
          height={200}
        />
      )}
    </div>
))

  const getCardContent = () => (
    <Card>
      {getFields()}
      {getCharts()}
    </Card>
  );

  return (
    <Tooltip content={getCardContent()} position="left" noPadding>
      {children}
    </Tooltip>    
  )
}

CardOnHover.propTypes = {
  children: PropTypes.element.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default CardOnHover;