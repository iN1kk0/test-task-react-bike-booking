import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Bikes from "./components/Bikes";
import { useState } from "react";

const App = () => {
  const [bikes, setBikes] = useState([
    {
      name: "Name 1",
      type: "Type 1",
      color: "Red",
      id: "111",
      status: "Available",
      price: "100",
    },
    {
      name: "Name 2",
      type: "Type 2",
      color: "Green",
      id: "222",
      status: "Unavailable",
      price: "200",
    },
  ]);

  return (
    <div>
      <Header />
      <Bikes bikes={bikes} />
      <Footer />
    </div>
  );
};
export default App;
