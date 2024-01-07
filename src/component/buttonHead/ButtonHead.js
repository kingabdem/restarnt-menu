import "./ButtonHeadStyle.css";

export default function ButtonHead({HandleText,CategorieData}) {

  function HandleClick(text){
    HandleText(text);
  }
  return (
    <div>
      <div className="AllButton my-5">
        {CategorieData.map((e,i)=>(
          <button key={i} onClick={()=>{HandleClick({e})}} className="mx-2 btnFood">{e}</button>
        ))}
      </div>
    </div>
  );
}
