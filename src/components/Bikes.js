import Bike from "./Bike";

const Bikes = (props) => {
  return (
    <>
      {props.bikes.map((bike, index) => (
        <Bike
          key={index}
          index={index}
          bike={bike}
          onChangeStatus={props.onChangeStatus}
          handleDelete={props.handleDelete}
        />
      ))}
    </>
  );
};

export default Bikes;
