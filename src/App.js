import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Bikes from "./components/Bikes";
import { useState } from "react";
import styled from "styled-components";
import Form from "./components/Form";

const Wrapper = styled.div`
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-basis: 100%;
`;
const BikesWrapper = styled.div`
  width: 50%;
  border-right: 1px solid #c4c4c4;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-basis: 50%;
  padding: 10px;
  flex-wrap: wrap;
`;

const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-basis: 50%;
  padding: 10px;
`;

const App = () => {
  const [bikes, setBikes] = useState([
    {
      name: "Name 1",
      type: "Type 1",
      color: "Green",
      id: "111",
      status: "Available",
      price: "100",
    },
    {
      name: "Name 2",
      type: "Type 2",
      color: "Red",
      id: "222",
      status: "Busy",
      price: "200",
    },
  ]);

  const [values, setValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBikes([...bikes, values]);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValue({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeStatus = (index) => (event) => {
    event.preventDefault();
    console.log(index);
    const newStatusBikes = [...bikes];
    newStatusBikes[index].status = event.target.value;
    setBikes(newStatusBikes);
  };

  const handleDelete = (index) => {
    const newBikes = bikes.filter((bikes, i) => i !== index);
    setBikes(newBikes);
  };

  return (
    <div>
      <Header />
      <Wrapper>
        <BikesWrapper>
          <Bikes
            bikes={bikes}
            onChangeStatus={onChangeStatus}
            handleDelete={handleDelete}
          />
        </BikesWrapper>
        <FormWrapper>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={values}
          />
        </FormWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default App;
