import {
  BikeItem,
  BikeName,
  BikeDelete,
  BikeID,
  BikeStatus,
  BikeStatusTitle,
  BikePrice,
} from "../styles/bikeStyles";

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
