import styled from "styled-components";

const StatsTitle = styled.h3`
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
  margin: 5px 0px;
`;

const StatsElements = styled.p`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  margin: 5px 0px;
`;

const Stats = (props) => {
  const totalCost = props.bikes.reduce(function (prev, cur) {
    return parseInt(prev) + parseInt(cur.price);
  }, 0);

  const numberofBikes = props.bikes.length;
  const avaliableBikes = props.bikes.filter(
    (bike) => bike.status === "Avaliable"
  ).length;
  const bookedBikes = props.bikes.filter(
    (bike) => bike.status === "Unavailable"
  ).length;

  const averageCost = parseInt(totalCost / numberofBikes);

  return (
    <>
      <StatsTitle>STATISTICS</StatsTitle>
      <StatsElements>
        Total Bikes: <b>{numberofBikes}</b>
      </StatsElements>
      <StatsElements>
        Available Bikes: <b>{avaliableBikes}</b>
      </StatsElements>
      <StatsElements>
        Booked Bikes: <b>{bookedBikes}</b>
      </StatsElements>
      <StatsElements>
        Average bike cost: <b>{averageCost}</b> UAH/hr.
      </StatsElements>
    </>
  );
};

export default Stats;
