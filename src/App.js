import NavbarSite from "./component/navbar/navbar";
import Header from "./component/header/header";
import ItemsList from "./component/ItemsList/itemsList";
import ButtonHead from "./component/buttonHead/ButtonHead";
import './index.css';

function App() {
  return (
    <div className="App">
      <NavbarSite />
      <Header />
      <ButtonHead />
      <ItemsList />
      <ItemsList />
      <ItemsList />
      <ItemsList />
      <ItemsList />
    </div>
  );
}

export default App;
