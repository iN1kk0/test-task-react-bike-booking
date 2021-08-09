import { StatsTitle, StatsElements } from "../styles/statsStyles";

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
