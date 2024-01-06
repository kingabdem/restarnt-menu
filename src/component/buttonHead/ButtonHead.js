import "./ButtonHeadStyle.css";

export default function ButtonHead() {
  return (
    <div>
      <div className="AllButton my-5">
        <button className="mx-2 btnFood">All</button>
        <button className="mx-2 btnFood">Lunch</button>
        <button className="mx-2 btnFood">Dinner</button>
      </div>
    </div>
  );
}
