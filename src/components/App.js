import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState, useEffect } from "react";
import Bikes from "../components/Bikes";
import Form from "../components/Form";
import Stats from "../components/Stats";
import {
  Wrapper,
  BikesWrapper,
  FormStatsWrapper,
  StatsWrapper,
} from "../styles/appStyles";

const initialState = () =>
  JSON.parse(window.localStorage.getItem("bikes")) || [
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
      status: "Unavailable",
      price: "300",
    },
  ];

const App = () => {
  const [bikes, setBikes] = useState(initialState);
  const [values, setValue] = useState([]);

  useEffect(() => {
    window.localStorage.setItem("bikes", JSON.stringify(bikes));
  }, [bikes]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let unique = true;
    bikes.forEach((bike) => {
      if (bike.id === values.id) {
        unique = false;
      }
    });

    if (
      values.name.length < 5 ||
      values.type.length < 5 ||
      values.color.length < 5 ||
      values.desc.length < 5
    ) {
      alert("All text fields minimum length should be 5 characters");
    } else if (!unique) {
      alert("All Bike IDs should be unique");
    } else {
      setBikes([...bikes, values]);
    }
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
