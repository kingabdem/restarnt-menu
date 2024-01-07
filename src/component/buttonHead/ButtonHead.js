import "./ButtonHeadStyle.css";

export default function ButtonHead({HandleText}) {
  function HandleClick(text){
    HandleText(text);
  }
  return (
    <div>
      <div className="AllButton my-5">
        <button onClick={()=>{HandleClick("All")}} className="mx-2 btnFood">All</button>
        <button onClick={()=>{HandleClick("Breakfast")}} className="mx-2 btnFood">Breakfast</button>
        <button onClick={()=>{HandleClick("Lunch")}} className="mx-2 btnFood">Lunch</button>
        <button onClick={()=>{HandleClick("Dinner")}} className="mx-2 btnFood">Dinner</button>
      </div>
    </div>
  );
}
