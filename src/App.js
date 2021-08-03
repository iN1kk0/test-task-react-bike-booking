import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Bikes from "./components/Bikes";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "./components/Form";
import Stats from "./components/Stats";

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

const FormStatsWrapper = styled.div`
  width: 50%;
  padding-left: 10px;
`;

const StatsWrapper = styled.div`
  border-top: 1px solid #c4c4c4;
  margin: 0 10px 10px;
`;

const App = () => {
  const [bikes, setBikes] = useState([
    {
      name: "Name 1",
      type: "Type 1",
      color: "Green",
      id: "111",
      status: "Avaliable",
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
    {
      name: "Name 3",
      type: "Type 3",
      color: "Blue",
      id: "333",
      status: "Avaliable",
      price: "300",
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
    const newStatusBikes = [...bikes];
    newStatusBikes[index].status = event.target.value;
    setBikes(newStatusBikes);
  };

  const handleDelete = (index) => {
    const newBikes = bikes.filter((bikes, i) => i !== index);
    setBikes(newBikes);
  };

  const handleClear = () => {
    setValue("");
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
        <FormStatsWrapper>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClear={handleClear}
            value={values}
          />
          <StatsWrapper>
            <Stats bikes={bikes} />
          </StatsWrapper>
        </FormStatsWrapper>
      </Wrapper>
      <Footer />
    </div>
  );
};
export default App;
