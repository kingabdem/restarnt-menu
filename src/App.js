import NavbarSite from "./component/navbar/navbar";
import Header from "./component/header/header";
import ItemsList from "./component/ItemsList/itemsList";
import ButtonHead from "./component/buttonHead/ButtonHead";
import { Data } from "./data";
import "./index.css";
import { useState } from "react";

function App() {
  const [dataArray, setdataArray] = useState(Data);
  // const [dataArraySearch, setdataArraySearch] = useState([]);

  let categorie = ["All", ...new Set(Data.map((e) => e.category))];
  // Fonction pour échanger les positions de deux éléments dans le tableau
  function swapElements(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  swapElements(categorie, 1, 2);
  swapElements(categorie, 2, 3);

function searchTerm(term) {

  setdataArray([]);

  const filteredData = Data.filter((e) =>
  e.title.toLowerCase().includes(term.toLowerCase())
);

setdataArray(filteredData);

}


  function HandleText(text) {
    if (text.e == "All") {
      setdataArray(Data);
    } else {
      let NewArray = Data.filter((e) => e.category == text.e);
      setdataArray(NewArray);
    }
  }
  return (
    <div className="App">
      <NavbarSite searchTerm={searchTerm}  />
      <Header />
      <ButtonHead HandleText={HandleText} CategorieData={categorie} />
      <ItemsList dataList={dataArray} />
    </div>
  );
}

export default App;
