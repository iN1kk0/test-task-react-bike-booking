import styled from "styled-components";

const BikeItem = styled.div`
  width: 618px;
  max-width: 100%;
  background: #e8e8e8;
  border: 2px solid #6fcf97;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-grow: 0;
`;

const BikeName = styled.span`
  font-family: Saira;
  font-style: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex-basis: 50%;
  order: 0;
`;

const BikeDelete = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex-basis: 50%;
  order: 1;
  justify-content: flex-end;
  cursor: pointer;
`;

const BikeID = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 13px;
  display: flex;
  align-items: flex-end;
  color: #717171;
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 6px 0px;
  flex-basis: 100%;
`;

const BikeStatus = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #333333;
  flex: none;
  order: 3;
  flex-grow: 0;
  flex-basis: 50%;
`;

const BikeStatusTitle = styled.span`
  margin-right: 18px;
`;

const BikePrice = styled.span`
  font-family: Saira;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;
  flex-basis: 50%;
  order: 4;
  justify-content: flex-end;
`;

const Bike = (props) => {
  return (
    <BikeItem
      style={{
        border:
          props.bike.status === "Unavailable"
            ? "2px solid #EB5757"
            : props.bike.status === "Busy"
            ? "2px solid #F2994A"
            : "2px solid #6fcf97",
      }}
    >
      <BikeName>
        <b>{props.bike.name}</b> - {props.bike.type} ({props.bike.color})
      </BikeName>
      <BikeDelete onClick={() => props.handleDelete(props.index)}>
        &#10006;
      </BikeDelete>
      <BikeID>ID: {props.bike.id}</BikeID>
      <BikeStatus>
        <BikeStatusTitle>STATUS:</BikeStatusTitle>
        <select
          value={props.bike.status}
          onChange={props.onChangeStatus(props.index)}
        >
          <option value="Avaliable">Avaliable</option>
          <option value="Unavailable">Unavailable</option>
          <option value="Busy">Busy</option>
        </select>
      </BikeStatus>
      <BikePrice>{props.bike.price} UAH/hr.</BikePrice>
    </BikeItem>
  );
};

export default Bike;
