import NavbarSite from "./component/navbar/navbar";
import Header from "./component/header/header";
import ItemsList from "./component/ItemsList/itemsList";
import ButtonHead from "./component/buttonHead/ButtonHead";
import { Data } from "./data";
import "./index.css";
import { useState } from "react";

function App() {
  const [dataArray, setdataArray] = useState(Data);

  function HandleText(text) {
    if (text == "All") {
      setdataArray(Data);
    } else {
      setdataArray([]);
      let NewArray = Data.filter((e) => e.category == text);
      setdataArray(NewArray);
    }
  }
  return (
    <div className="App">
      <NavbarSite />
      <Header />
      <ButtonHead HandleText={HandleText} />
      <ItemsList dataList={dataArray} />
    </div>
  );
}

export default App;
